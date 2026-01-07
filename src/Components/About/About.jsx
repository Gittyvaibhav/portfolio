import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.png'

const About = () => {
    return (
        <div id='about' className="about">
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="pattern" />
            </div>

            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="profile" />

                    <div className="about-right">
                        <div className="about-para">
                            <p>
                                I’m Vaibhav Sharma, a B.Tech undergraduate at NITH, building full-stack web applications and currently learning blockchain development to expand into Web3.
                            </p>

    
                        </div>

                        <div className="about-skills">
                            <div className="about-skill">
                                <p>HTML & CSS</p>
                                <hr style={{ width: "80%" }} />
                            </div>

                            <div className="about-skill">
                                <p>React JS</p>
                                <hr style={{ width: "70%" }} />
                            </div>

                            <div className="about-skill">
                                <p>JavaScript</p>
                                <hr style={{ width: "60%" }} />
                            </div>
                             <div className="about-skill">
                                <p>MongoDB</p>
                                <hr style={{ width: "65%" }} />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
