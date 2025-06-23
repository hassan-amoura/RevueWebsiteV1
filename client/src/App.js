import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Contact from './components/Contact';
import './components/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Contact />
    </div>
  );
}

export default App;
