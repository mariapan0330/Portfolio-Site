import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import LeftLeaf from "./components/LeftLeaf";
import RightLeaf from "./components/RightLeaf";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import ImageOverlay from "./components/ImageOverlay";

const App: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState<boolean>(false)
  const [overlayImg, setOverlayImg] = useState<string>('')
  const [overlayAlt, setOverlayAlt] = useState<string>('')
  
  const handleOverlayOpen = (img:string, alt:string) => {
    setOverlayAlt(alt)
    setOverlayImg(img)
    setShowOverlay(true)
    document.body.style.overflow = "hidden";
  }

  const handleOverlayClose = () => {
    setShowOverlay(false)
    document.body.style.overflow = "";
  }

  return (
    <>
      <div className="App" style={showOverlay ? {overflow:'hidden'} : {overflow:'auto'}}>
        {/* Calls all main components. I've also listed their children. */}
        <Home />
          {/* Home > IAm */}
        <LeftLeaf />
        <RightLeaf />
        <Navbar />
        <About />
          {/* About > HobbiesList && About > SkillsList */}
        <Projects handleOverlayOpen={handleOverlayOpen} />
          {/* CHILDREN: Projects > ProjectsCarousel > ProjectCard */}
        <Experience handleOverlayOpen={handleOverlayOpen} />
          {/* CHILDREN: Experience > XPCard */}
        <ContactMe />
        <Footer />
        {showOverlay && <ImageOverlay img={overlayImg} alt={overlayAlt} handleOverlayClose={handleOverlayClose} />}
      </div>
    </>
  );
};

export default App;
