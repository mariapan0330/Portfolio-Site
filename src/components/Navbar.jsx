import React from 'react'
import { HashLink } from 'react-router-hash-link'
import '../styles/Navbar.css'

export default function Navbar() {
    return (
        <>
        <div className="nav">
        <ul>
            <li><HashLink className='navLinks' to="#home" ><h2>Home</h2></HashLink></li>
            <li><HashLink className='navLinks' to="#about" ><h2>About</h2></HashLink></li>
            <li><HashLink className='navLinks' to="#projects" ><h2>Projects</h2></HashLink></li>
            <li><HashLink className='navLinks' to="#contactme" ><h2>Contact Me</h2></HashLink></li>
        </ul>
        </div>
        </>
    )
}