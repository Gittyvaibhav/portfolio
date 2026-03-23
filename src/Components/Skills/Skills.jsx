import './Skills.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Reveal from '../Reveal/Reveal'
import skill7 from '../../assets/7.png'
import skill8 from '../../assets/8.png'
import skill9 from '../../assets/9.png'
import skill10 from '../../assets/10.png'
import skill12 from '../../assets/12.png'
import skill11 from '../../assets/11-removebg-preview.png'

const skillItems = [
  {
    title: 'GitHub',
    description: 'Click to view my profile',
    image: skill7,
    href: 'https://github.com/Gittyvaibhav',
  },
  {
    title: 'HTML',
    description: 'Semantic layouts',
    image: skill8,
  },
  {
    title: 'MongoDB',
    description: 'Document database',
    image: skill9,
  },
  {
    title: 'CSS',
    description: 'Responsive styling',
    image: skill10,
  },
  {
    title: 'React',
    description: 'Component-driven UI',
    image: skill11,
  },
  {
    title: 'Postman',
    description: 'API testing',
    image: skill12,
  },
]

const Skills = () => {
  return (
    <div id='skill' className="skills">
      <Reveal className="skills-title-wrapper">
        <h1 className="skills-title">
          Tech<span>Stack</span>
        </h1>
        <img src={theme_pattern} alt="pattern" />
      </Reveal>

      <div className="skills-container">
        {skillItems.map((skill, index) => {
          const content = (
            <>
              <img src={skill.image} alt={skill.title} />
              <p>{skill.title}</p>
              <span>{skill.description}</span>
            </>
          )

          return skill.href ? (
            <Reveal
              key={skill.title}
              as="a"
              className="skill-item"
              delay={140 + index * 90}
              href={skill.href}
              target="_blank"
              rel="noreferrer"
            >
              {content}
            </Reveal>
          ) : (
            <Reveal
              key={skill.title}
              className="skill-item"
              delay={140 + index * 90}
            >
              {content}
            </Reveal>
          )
        })}
      </div>
    </div>
  )
}

export default Skills
