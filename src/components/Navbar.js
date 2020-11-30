import React, { useState } from 'react';
import { Link } from 'react-scroll'
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';


function Navbar() {

  const [click, setClick] = useState(false);
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link
                 className='nav-links' onClick={closeMobileMenu}
                  activeClass="active"
                  to="introduction"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={0}
                  duration={500}
                  >
                  Intro
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className='nav-links'
                  onClick={closeMobileMenu}
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={0}
                  duration={500}
                  >
                  About
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className='nav-links'
                  onClick={closeMobileMenu}
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={0}
                  duration={500}
                  >
                  Skills
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className='nav-links'
                  onClick={closeMobileMenu}
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={0}
                  duration={500}
                  >
                  Projects
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className='nav-links'
                  onClick={closeMobileMenu}
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={0}
                  duration={500}
                  >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
