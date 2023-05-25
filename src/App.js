import './App.css';
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ContactMe from './pages/ContactMe'
import Plx from 'react-plx'


function App() {
  // TODO: make each animated image into its own react component
  const plxBg = [
    {
      start: 0, // when the animation starts: currently when scroll hits 0px. 
      // can also be other HTML elements, which activate when the specified el enters the viewport
      end: 8000, // ends when: currently when scroll hits 8000px.
      // can also be other HTML elements.
      // maybe try using duration instead which if you enter another HTML element will last for as 
      // tall as that element. 
      properties: [
        {
          startValue: 1,
          endValue: 1.1,
          property: "scale",
        },
      ],
    },
  ];

  const plxBgStyle = {
    'position': "fixed",
    'zIndex':90,
    'left':0,
    "top":0,
    "width": "100%",
  }

  const plxFg = [
    {
      start: 0,
      end: 2000,
      properties: [
        {
          startValue: 1000,
          endValue: -1500,
          property: "translateX",
        },
      ],
    },
  ];

  const plxFgStyle = {
    'position': "fixed",
    'zIndex':90,
    'left':0,
    "top":0,
    "width": "100%",
  }


  return (
    <>
    <div className="App">
      <Plx parallaxData={plxBg} style={plxBgStyle}>
        <img style={{ width: "100%" }} src={require("./images/forest2.jpg")} alt="background" />
      </Plx>
      <Plx parallaxData={plxFg} style={plxFgStyle}>
        <img style={{ width: "25%", paddingTop:"5%" }} src={require("./images/rocket.png")} alt="background" />
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
