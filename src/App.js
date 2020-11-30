import React from 'react';
import './App.css';
import Home from './components/pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer/Footer';
import About from './components/pages/About/About';
import Skills from './components/pages/Skills/Skills';
import Projects from './components/pages/Projects/Projects';
import Contact from './components/pages/Contact/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
