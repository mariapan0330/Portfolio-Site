import './App.css';
import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import LeftLeaf from './components/LeftLeaf'
import RightLeaf from './components/RightLeaf'
import About from './components/About'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
import Experience from './components/Experience';
import Footer from './components/Footer';

const App:React.FC = () => {

  return (
    <>
    <div className="App">
      <Home />
      <LeftLeaf />
      <RightLeaf />
      <Navbar />
      <About />
      <Projects />
      <Experience />
      <ContactMe />
      <Footer />
    </div>
    </>
  );
}

export default App;