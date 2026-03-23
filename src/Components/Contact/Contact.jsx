import { useState } from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Reveal from '../Reveal/Reveal'

export default function Contact() {
  const [result, setResult] = useState('')
  const [resultType, setResultType] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult('Sending...')
    setResultType('')

    try {
      const formData = new FormData(event.target)
      formData.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '')
      formData.append('subject', 'New portfolio contact message')
      formData.append('from_name', 'Portfolio Website')

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setResult('Form submitted successfully.')
        setResultType('success')
        event.target.reset()
      } else {
        setResult(data.message || 'Something went wrong. Please try again.')
        setResultType('error')
      }
    } catch (error) {
      console.error('Contact form error', error)
      setResult('Unable to send right now. Please try again later.')
      setResultType('error')
    }
  }

  return (
    <div id="contact" className="contact">
      <Reveal className="contact-title">
        <h1>
          Get in <span>touch</span>
        </h1>
        <img src={theme_pattern} alt="pattern" />
      </Reveal>

      <div className="contact-section">
        <Reveal className="contact-left" direction="left" delay={120}>
          <h2>
            Let&apos;s <span>talk</span>
          </h2>

          <p>
            I&apos;m currently available to take on new projects. Feel free to send
            me a message anytime.
          </p>

          <div className="contact-details">
            <Reveal as="a" href="mailto:24beee103@nith.ac.in" className="contact-detail" delay={220}>
              24beee103@nith.ac.in
            </Reveal>
            <Reveal as="a" href="tel:+919015075766" className="contact-detail" delay={300}>
              +91 9015075766
            </Reveal>
            <Reveal
              as="a"
              href="https://www.instagram.com/va16hav_30/"
              target="_blank"
              rel="noreferrer"
              className="contact-detail"
              delay={380}
            >
              @va1b6hav_30
            </Reveal>
          </div>
        </Reveal>

        <Reveal as="form" className="contact-right" direction="right" delay={200} onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" required />

          <label>Your Email</label>
          <input type="email" name="email" placeholder="Enter your email" required />

          <label>Your Message</label>
          <textarea name="message" rows="6" placeholder="Enter your message" required />

          <button type="submit">Submit now</button>
          {result && <p className={`form-result ${resultType}`}>{result}</p>}
        </Reveal>
      </div>
    </div>
  )
}
