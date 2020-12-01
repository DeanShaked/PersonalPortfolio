import React from 'react'
import './About.css'
import { myInfo } from './Data'
import ScrollToTop from'../../ScrollToTop'

function About({id}) {
    return (
      <>
        <ScrollToTop/>
          <section id={id} className="about">
            <div className="about-row">
              <h1>About Me</h1>
              <hr></hr>
              <p>{myInfo.bio}</p>
            </div>
          </section>
        </>
    );
  }
  
  export default About;