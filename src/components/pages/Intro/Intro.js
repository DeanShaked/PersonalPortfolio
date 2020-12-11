import React from 'react'
import './Intro.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Intro({ id }) {
    return (
      <header id={id}>
         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">Hello, I'm <span className="span-name">Dean Shaked</span>.</h1>
               <hr />
               <h3>Front-End Web Developer with a passion to build beautiful UI&UX using <span className="second"> ReactJS</span>.</h3>
               <div className="social-wrapper">
                  <div className="row">
                  <a
                  className='social-icon-github'
                  href='https://github.com/DeanShaked'
                  target='https://github.com/DeanShaked'
                  aria-label='GitHub'
                  >
                  <FaGithub />
                  </a>
               </div>
               <div className="row">
               <a
                  className='social-icon-linkedin'
                  href='https://www.linkedin.com/in/dean-shaked-a511861a3/'
                  target='https://www.linkedin.com/in/dean-shaked-a511861a3/'
                  aria-label='LinkedIn'
               >
              <FaLinkedin />
               </a>
               </div>
               </div> 
            </div>
         </div>
      </header>
    );
  }
  
  export default Intro;