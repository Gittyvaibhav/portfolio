import { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';

const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');

    const formData = new FormData(event.target);
    const payload = {
      name: formData.get('name')?.toString().trim(),
      email: formData.get('email')?.toString().trim(),
      message: formData.get('message')?.toString().trim(),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success && data.mailed) {
        setResult('Message sent and saved successfully.');
        event.target.reset();
      } else if (data.success && data.stored && !data.mailed) {
        setResult('Message saved, but email delivery failed.');
      } else {
        setResult(data.message || 'Something went wrong.');
      }
    } catch (_error) {
      setResult('Server error. Please try again.');
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>
          Get in <span>touch</span>
        </h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h2>
            Let&apos;s <span>talk</span>
          </h2>

          <p>
            I&apos;m currently available to take on new projects. Feel free to send me a message
            anytime.
          </p>

          <div className="contact-details">
            <p>Email: 24beee103@nith.ac.in</p>
            <p>Phone: +91 9015075766</p>
            <p>Instagram: @va1b6hav_30</p>
          </div>
        </div>

        <form className="contact-right" onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" required />

          <label>Your Email</label>
          <input type="email" name="email" placeholder="Enter your email" required />

          <label>Your Message</label>
          <textarea name="message" rows="6" placeholder="Enter your message" required />

          <button type="submit">Submit now</button>
          {result && <p className="form-result">{result}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
