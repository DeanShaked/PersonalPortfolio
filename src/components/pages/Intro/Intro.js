import React from 'react'
import './Intro.css'

function Intro({ id }) {
    return (
      <header id={id}>
         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">Hello, I'm Dean Shaked.</h1>
               <h3>Front-End Web Developer with a Passion to create complicated elements using <span className="second"> ReactJS</span>.</h3>
               <hr />
            </div>
         </div>
      </header>
    );
  }
  
  export default Intro;