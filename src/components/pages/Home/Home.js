import React from 'react';
import Intro from '../Intro/Intro';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

function Home() {
  return (
    <>
      <Intro id="intro"/>
      <About id="about"/>
      <Skills id="skills"/>
      <Projects id="projects"/>
      <Contact id="contact"/>
      <Footer></Footer>
    </>
  )
}

export default Home;
