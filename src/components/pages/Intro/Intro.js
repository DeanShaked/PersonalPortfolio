import React from 'react'
import './Intro.css'

function Intro({ id }) {
    return (
      <header id={id}>
         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">I'm Dean Shaked.</h1>
               <h3>I'm a Herzeliya based <span>ReactJS Developer</span>. Front-End Web Developer looking for my next journy.</h3>
               <hr />
            </div>
         </div>
      </header>
    );
  }
  
  export default Intro;