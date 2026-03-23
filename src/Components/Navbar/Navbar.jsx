import { useState } from 'react'
import './Navbar.css'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const [menu, setMenu] = useState('home')
  const [mobileMenu, setMobileMenu] = useState(false)

  const closeMobileMenu = () => setMobileMenu(false)

  const handleMenuSelect = (section) => {
    setMenu(section)
    closeMobileMenu()
  }

  return (
    <>
      <div
        className={`nav-backdrop ${mobileMenu ? 'active' : ''}`}
        onClick={closeMobileMenu}
      />

      <div className="navbar">
        <AnchorLink
          href="#home"
          offset={50}
          className="logo-text"
          onClick={() => handleMenuSelect('home')}
        >
          Vaibhav
        </AnchorLink>

        <img
          src={menu_open}
          alt="Open menu"
          className="nav-mob-open"
          onClick={() => setMobileMenu(true)}
        />

        <ul className={`nav-menu ${mobileMenu ? 'active' : ''}`}>
          <img
            src={menu_close}
            alt="Close menu"
            className="nav-mob-close"
            onClick={closeMobileMenu}
          />

          <li>
            <AnchorLink href="#home" offset={50} onClick={() => handleMenuSelect('home')}>
              <p>Home</p>
            </AnchorLink>
            {menu === 'home' && <img src={underline} alt="" />}
          </li>

          <li>
            <AnchorLink href="#about" offset={50} onClick={() => handleMenuSelect('about')}>
              <p>About Me</p>
            </AnchorLink>
            {menu === 'about' && <img src={underline} alt="" />}
          </li>

          <li>
            <AnchorLink href="#skill" offset={50} onClick={() => handleMenuSelect('skills')}>
              <p>Skills</p>
            </AnchorLink>
            {menu === 'skills' && <img src={underline} alt="" />}
          </li>

          <li>
            <AnchorLink
              href="#portfolio"
              offset={50}
              onClick={() => handleMenuSelect('portfolio')}
            >
              <p>Resume</p>
            </AnchorLink>
            {menu === 'portfolio' && <img src={underline} alt="" />}
          </li>

          <li className="nav-menu-cta">
            <AnchorLink
              className="nav-connect-mobile"
              offset={50}
              href="#contact"
              onClick={() => handleMenuSelect('contact')}
            >
              Contact Me
            </AnchorLink>
          </li>
        </ul>

        <AnchorLink
          className="nav-connect"
          offset={50}
          href="#contact"
          onClick={() => setMenu('contact')}
        >
          Contact Me
        </AnchorLink>
      </div>
    </>
  )
}

export default Navbar
