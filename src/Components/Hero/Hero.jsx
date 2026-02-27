import './Hero.css'
import profile_img from '../../assets/profile_img.png'

const Hero = () => {
  return (
    <div id='home' className="hero">
      <img src={profile_img} alt="Vaibhav Sharma" className="hero-img" />

      <h1>
       Hi! I’m <span>Vaibhav Sharma</span>, Fullstack Web-Developer
      </h1>

      <p>
      Fullstack Developer specializing in Node.js, Express, and MongoDB, building scalable APIs and database-driven applications.
      </p>

      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div id='portfolio' className="hero-resume">Click to download my resume</div>
      </div>
    </div>
  )
}

export default Hero
