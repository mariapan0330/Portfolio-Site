import React from 'react'
import { HashLink } from 'react-router-hash-link'
import '../styles/Navbar.css'

const Navbar: React.FC = () => {
    return (
        <>
        <div className="nav">
        <ul>
            <li><HashLink className='navLinks' to="#home" ><h1>Home</h1></HashLink></li>
            <li><HashLink className='navLinks' to="#about" ><h1>About</h1></HashLink></li>
            <li><HashLink className='navLinks' to="#projects" ><h1>Projects</h1></HashLink></li>
            <li><HashLink className='navLinks' to="#xp" ><h1>Experience</h1></HashLink></li>
            <li><HashLink className='navLinks' to="#contactme" ><h1>Contact Me</h1></HashLink></li>
        </ul>
        </div>
        </>
    )
}

export default Navbar;