import { useState } from 'react'
import './Navbar.css'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const [menu, setMenu] = useState("home")
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <div className="navbar">
      <div className="logo-text">Vaibhav</div>

      <img
        src={menu_open}
        alt=""
        className="nav-mob-open"
        onClick={() => setMobileMenu(true)}
      />

      <ul className={`nav-menu ${mobileMenu ? "active" : ""}`}>
        <img
          src={menu_close}
          alt=""
          className="nav-mob-close"
          onClick={() => setMobileMenu(false)}
        />

        <li>
          <AnchorLink href="#home" offset={50} onClick={() => setMenu("home")}>
            <p>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underline} alt="" />}
        </li>

        <li>
          <AnchorLink href="#about" offset={50} onClick={() => setMenu("about")}>
            <p>About Me</p>
          </AnchorLink>
          {menu === "about" && <img src={underline} alt="" />}
        </li>

        <li>
          <AnchorLink href="#skill" offset={50} onClick={() => setMenu("skills")}>
           Skills 
          </AnchorLink>
          {menu === "skills" && <img src={underline} alt="" />}
        </li>

        <li>
          <AnchorLink href="#portfolio" offset={50} onClick={() => setMenu("portfolio")}>
            <p>Resume</p>
          </AnchorLink>
          {menu === "portfolio" && <img src={underline} alt="" />}
        </li>
      </ul>

      <AnchorLink
        className="nav-connect"
        offset={50}
        href="#contact"
        onClick={() => setMenu("contact")}
      >
        Connect Me
      </AnchorLink>
    </div>
  )
}

export default Navbar
