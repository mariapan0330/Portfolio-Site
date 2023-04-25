import './App.css';
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ContactMe from './pages/ContactMe'


function App() {
  return (
    <>
    <div className="App">
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
