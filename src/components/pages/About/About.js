import React from 'react'
import './About.css'

function About({ id }) {
    return (
      <div className='projects__section' id={id}>
      <div className='projects__wrapper'>
        <h1 className='projects__heading'>About</h1>
        <div className='projects__container'>
        </div>
      </div>
    </div>
    );
  }
  
  export default About;