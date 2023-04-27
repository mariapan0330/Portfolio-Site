import './App.css';
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ContactMe from './pages/ContactMe'
import Plx from 'react-plx'


function App() {
  const parallaxData = [
    {
      start: 0,
      end: 800,
      properties: [
        {
          startValue: 1,
          endValue: 1.6,
          property: "scale",
        },
      ],
    },
  ];

  const parallaxStyle = {
    'position': "fixed",
    'left':0,
    "top":0,
    "width": "100%",
  }


  return (
    <>
    <div className="App">
      <Plx parallaxData={parallaxData} style={parallaxStyle}>
        <img style={{ width: "100%" }} src={require("./images/forest2.jpg")} alt="background" />
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
