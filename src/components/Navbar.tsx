import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
// import {useMediaQuery} from 'react-responsive';
// trying to bring in react media queries
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  const [phoneMenu, setPhoneMenu] = useState<boolean>(true)

  return (
    <>
      <div className="nav">
        <button onClick={()=>setPhoneMenu(prev => !prev)}>|||</button>
        <ul style={phoneMenu ? {display:'flex'} : {display: 'none', height: 0}}>
          <li>
            <HashLink className="navLinks" to="#home">
              <h1>Home</h1>
            </HashLink>
          </li>
          <li>
            <HashLink className="navLinks" to="#about">
              <h1>About</h1>
            </HashLink>
          </li>
          <li>
            <HashLink className="navLinks" to="#projects">
              <h1>Projects</h1>
            </HashLink>
          </li>
          <li>
            <HashLink className="navLinks" to="#xp">
              <h1>Experience</h1>
            </HashLink>
          </li>
          <li>
            <HashLink className="navLinks" to="#contactme">
              <h1>Contact Me</h1>
            </HashLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
