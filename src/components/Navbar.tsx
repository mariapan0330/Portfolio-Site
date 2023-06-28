import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { useMediaQuery } from "react-responsive";
// when the npm stopped letting me install packages, i did a 'npm install react-scripts@5'
// in the terminal to update the react-scripts version and downgraded the TS version to 4.9.5
// which apparently worked.
// trying to bring in react media queries
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  const isPhone = useMediaQuery({ query: "(max-width: 768px)" });
  const [phoneMenuOpen, setPhoneMenuOpen] = useState<boolean>(true);
  // todo: can now see if it's a phone
  // possibly just use this instead: https://www.youtube.com/watch?v=AXQs8dr1VzY

  useEffect(() => {
    setPhoneMenuOpen(!isPhone)
  }, [isPhone])

  return (
    <>
      <div className="nav">
        {isPhone && (
          <div className="nav-menu-btn" onClick={() => setPhoneMenuOpen((prev) => !prev)}>
            <i className="fa-solid fa-bars"></i>
          </div>
        )}
        <ul
          style={
            phoneMenuOpen ? { display: "flex" } : { display: "none", height: 0 }
          }
        >
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
