import './App.css';
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ContactMe from './pages/ContactMe'
import Plx from 'react-plx'


function App() {
  return (
    <>
    <div className="App">
      <Plx>
        
      </Plx>
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
