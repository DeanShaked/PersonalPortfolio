import React from 'react'
import './Intro.css'

function Intro({ id }) {
    return (
      <header id={id}>
         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">Hello, I'm <span className="span-name">Dean Shaked</span>.</h1>
               <hr />
               <h3>Front-End Web Developer with a passion to build beautiful UI&UX using <span className="second"> ReactJS</span>.</h3>  
            </div>
         </div>
      </header>
    );
  }
  
  export default Intro;