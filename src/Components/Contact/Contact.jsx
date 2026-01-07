import { useState } from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const Contact = () => {
  const [result, setResult] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    formData.append("access_key", "9938adc6-c826-40cc-a8b3-823c4ff8f294")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    })

    const data = await response.json()

    if (data.success) {
      setResult("Message sent successfully ✅")
      event.target.reset()
    } else {
      setResult("Something went wrong ❌")
    }
  }

  return (
    <div id="contact" className="contact">
      {/* TITLE */}
      <div className="contact-title">
        <h1>
          Get in <span>touch</span>
        </h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      <div className="contact-section">
        {/* LEFT */}
        <div className="contact-left">
          <h2>
            Let’s <span>talk</span>
          </h2>

          <p>
            I’m currently available to take on new projects. Feel free to send
            me a message anytime.
          </p>

          <div className="contact-details">
            <p>📧 24beee103@nith.ac.in</p>
            <p>📞 +91 9015075766</p>
            <p>📸 Instagram: @va1b6hav_30</p>
          </div>
        </div>

        {/* RIGHT (FORM) */}
        <form className="contact-right" onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" required />

          <label>Your Email</label>
          <input type="email" name="email" placeholder="Enter your email" required />

          <label>Your Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>

          <button type="submit">Submit now</button>

          {result && <p className="form-result">{result}</p>}
        </form>
      </div>
    </div>
  )
}

export default Contact
