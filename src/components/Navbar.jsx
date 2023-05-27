import React from 'react'
import { HashLink } from 'react-router-hash-link'
import '../styles/Navbar.css'

export default function Navbar() {
    return (
        <>
        <div className="nav">
        <ul>
            <li><HashLink className='navLinks' to="#home" ><h2>HOME</h2></HashLink></li>
            <li><HashLink className='navLinks' to="#about" ><h2>ABOUT</h2></HashLink></li>
            <li><HashLink className='navLinks' to="#projects" ><h2>PROJECTS</h2></HashLink></li>
            <li><HashLink className='navLinks' to="#contactme" ><h2>CONTACT ME</h2></HashLink></li>
        </ul>
        </div>
        </>
    )
}