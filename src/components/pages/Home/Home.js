import React from 'react';
import './Home.css'
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Introduction from '../Introduction/Introduction';

function Home() {
  return (
    <>
      <Introduction id="introduction"/>
      <About id="about"/>
      <Skills id="skills"/>
      <Projects id="projects"/>
      <Contact id="contact"/>
    </>
  )
}

export default Home;
