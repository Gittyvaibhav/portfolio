import './Skills.css'
import theme_pattern from '../../assets/theme_pattern.svg'


import skill7 from '../../assets/7.png'
import skill8 from '../../assets/8.png'
import skill9 from '../../assets/9.png'
import skill10 from '../../assets/10.png'
import skill12 from '../../assets/12.png'
import skill11 from '../../assets/11-removebg-preview.png'


const Skills = () => {
  return (
    <div id='skill' className="skills">
      <div className="skills-title-wrapper">
        <h1 className="skills-title">Tech<span>Stack</span></h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      <div className="skills-container">
        <div className="skill-item">
          <img src={skill7} alt="GITHUB" />
          <p>GITHUB</p>
        </div>

        <div className="skill-item">
          <img src={skill8} alt="CSS" />
          <p>HTML</p>
        </div>

        <div className="skill-item">
          <img src={skill9} alt="JavaScript" />
          <p>MONGODB</p>
        </div>

        <div className="skill-item">
          <img src={skill10} alt="React" />
          <p>CSS</p>
        </div>

        <div className="skill-item">
          <img src={skill11} alt="MongoDB" />
          <p>REACT</p>
        </div>

        <div className="skill-item">
          <img src={skill12} alt="Node.js" />
          <p>POSTMAN</p>
        </div>
      </div>
    </div>
  )
}

export default Skills
