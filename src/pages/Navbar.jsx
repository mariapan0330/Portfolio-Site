import React from 'react'
import { HashLink } from 'react-router-hash-link'
import '../styles/Navbar.css'

export default function Navbar() {
    return (
        <>
        <div className="nav">
        <ul>
            <li><HashLink to="#home">Home</HashLink></li>
            <li><HashLink to="#about">About</HashLink></li>
            <li><HashLink to="#projects">Projects</HashLink></li>
            <li><HashLink to="#contactme">Contact Me</HashLink></li>
        </ul>
        </div>
        </>
    )
}