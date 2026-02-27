import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    message: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

const ContactMessage = mongoose.model('ContactMessage', contactSchema);

const createTransporter = () =>
  nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  const transporter = createTransporter();
  const mailHtml = `
    <h2>New Contact Message</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, '<br/>')}</p>
  `;

  const [dbResult, mailResult] = await Promise.allSettled([
    ContactMessage.create({ name, email, message }),
    transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
      subject: `New portfolio message from ${name}`,
      html: mailHtml,
    }),
  ]);

  const stored = dbResult.status === 'fulfilled';
  const mailed = mailResult.status === 'fulfilled';

  if (stored && mailed) {
    return res.status(201).json({
      success: true,
      stored: true,
      mailed: true,
      message: 'Message saved and emailed successfully.',
    });
  }

  if (!stored) {
    console.error('Database save failed:', dbResult.reason?.message || dbResult.reason);
  }
  if (!mailed) {
    console.error('Email send failed:', mailResult.reason?.message || mailResult.reason);
  }

  if (stored || mailed) {
    return res.status(202).json({
      success: true,
      stored,
      mailed,
      message: stored
        ? 'Message saved to database, but email failed.'
        : 'Email sent, but database save failed.',
    });
  }

  return res.status(500).json({
    success: false,
    stored: false,
    mailed: false,
    message: 'Unable to process contact request.',
  });
});

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    app.listen(port, () => {
      console.log(`API server running on port ${port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error.message);
    process.exit(1);
  }
};

startServer();
