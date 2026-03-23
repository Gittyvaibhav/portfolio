import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.png'
import Reveal from '../Reveal/Reveal'

const skills = ['HTML & CSS', 'React JS', 'JavaScript', 'MongoDB']

const About = () => {
  return (
    <div id='about' className="about">
      <Reveal className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="pattern" />
      </Reveal>

      <div className="about-sections">
        <Reveal className="about-left" direction="left" delay={120}>
          <img src={profile_img} alt="Vaibhav Sharma portrait" />
        </Reveal>

        <div className="about-right">
          <Reveal className="about-para" direction="right" delay={200}>
            <p>
              I&apos;m Vaibhav Sharma, a B.Tech undergraduate at NIT Hamirpur,
              passionate about building full-stack web applications and solving
              complex problems.
            </p>
            <p>
              Right now, I&apos;m sharpening my DSA fundamentals while building
              practical products with modern JavaScript tools and backend
              systems.
            </p>
          </Reveal>

          <div className="about-skills">
            {skills.map((skill, index) => (
              <Reveal
                key={skill}
                className="about-skill"
                delay={280 + index * 90}
                direction="up"
              >
                <p>{skill}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
