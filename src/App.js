import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import LeftLeaf from './components/LeftLeaf'
import RightLeaf from './components/RightLeaf'
import About from './components/About'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
import Plx from 'react-plx'


function App() {
  // TODO: make each animated image into its own react component

  return (
    <>
    <div className="App">
      <LeftLeaf />
      <RightLeaf />
      <Navbar />
      <Home />
      <About />
      <Projects />
      <ContactMe />
    </div>
    </>
  );
}

export default App;
