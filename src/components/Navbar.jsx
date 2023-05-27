import React from 'react'
import { HashLink } from 'react-router-hash-link'
import '../styles/Navbar.css'

export default function Navbar() {
    return (
        <>
        <div className="nav">
        <ul>
            <li><HashLink className='navLinks' to="#home" >Home</HashLink></li>
            <li><HashLink className='navLinks' to="#about" >About</HashLink></li>
            <li><HashLink className='navLinks' to="#projects" >Projects</HashLink></li>
            <li><HashLink className='navLinks' to="#contactme" >Contact Me</HashLink></li>
        </ul>
        </div>
        </>
    )
}