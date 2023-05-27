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
      {/* <Plx parallaxData={plxBg} style={plxBgStyle}> */}
        {/* <img style={{ width: "100%" }} src={require("./images/forest2.jpg")} alt="background" /> */}
      {/* </Plx> */}
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
