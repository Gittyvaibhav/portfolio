import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import Reveal from '../Reveal/Reveal'

const highlights = ['Open to Work', 'Backend APIs', 'Responsive UI']

const Hero = () => {
  return (
    <div id='home' className="hero">
      <Reveal delay={80}>
        <img src={profile_img} alt="Vaibhav Sharma" className="hero-img" />
      </Reveal>

      <Reveal as="h1" delay={160}>
        Hi! I&apos;m <span>Vaibhav Sharma</span>, Full-Stack Web Developer
      </Reveal>

      <Reveal as="p" delay={260}>
        Full-stack developer specializing in Node.js, Express, and MongoDB,
        building scalable APIs and database-driven applications.
      </Reveal>

      <Reveal className="hero-highlights" delay={360}>
        {highlights.map((highlight, index) => (
          <span
            key={highlight}
            className="hero-highlight"
            style={{ animationDelay: `${index * 0.35}s` }}
          >
            {highlight}
          </span>
        ))}
      </Reveal>

      <Reveal className="hero-action" delay={460}>
        <a
          className="hero-connect"
          href="https://www.linkedin.com/in/vaibhav-sharma-78b738323/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          id='portfolio'
          className="hero-resume"
          href="https://drive.google.com/file/d/1ilKzqc15cmLSh2hu4sv4r8atlKocBKCM/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Click to download my resume
        </a>
      </Reveal>
    </div>
  )
}

export default Hero
