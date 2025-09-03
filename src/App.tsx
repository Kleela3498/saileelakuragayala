import React from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Home />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} Sai Leela Kuragayala. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
