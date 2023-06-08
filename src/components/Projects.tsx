import React, { useState } from 'react'
import '../styles/Projects.css'
import ProjectCarousel from './ProjectCarousel';

type ProjectInfo = {
    image: string;
    title: string;
    live: string;
    repo: string;
    technologies: string;
}

const Projects: React.FC = () => {
    // PLAN: Sort of jarring transition to 80s arcade game theme
    // "Deal in" project cards (might change because doesn't really fit theme)
    // PROJECT CARD: expand on hover
        // top: image, plays gif on hover
        // middle: TITLE, LIVE | REPO links
        // bottom: Tech stack
    
    const projects: ProjectInfo[] = [
        {
            image: 'customer contact',
            title: 'Customer Contact Form',
            live: '',
            repo: 'https://github.com/mariapan0330/customer-contact-form',
            technologies: 'React, JavaScript, NodeJS, JSX, CSS, NodeJS'
        },
        {
            image: 'escape game',
            title: 'Escape Game',
            live: '',
            repo: 'https://github.com/mariapan0330/Escape-Game',
            technologies: 'Flask, React, Python, JavaScript, JSX, CSS, NodeJS, PostgreSQL, Github, VSCode'
        },
        {
            image: 'weather',
            title: 'Weather Application',
            live: 'https://stalwart-tiramisu-dee856.netlify.app/',
            repo: 'https://github.com/mariapan0330/react-weather-app',
            technologies: 'Flask, React, Python, JavaScript, JSX, CSS, NodeJS, Open Weather API'
        },
        {
            image: 'blog',
            title: 'Typewriter Blog',
            live: '',
            repo: 'https://github.com/mariapan0330/React-Social-Media',
            technologies: 'Flask, React, Python, JavaScript, JSX, CSS, NodeJS, PostgreSQL'
        },
        {
            image: 'phonebook',
            title: 'Big Phonebook',
            live: 'https://gifted-radial-rugby.glitch.me/',
            repo: 'https://github.com/mariapan0330/Phonebook',
            technologies: 'Flask, React, Python, JavaScript, JSX, CSS, NodeJS, PostgreSQL'
        },
    ]
    return (
        <>
        <div className="projects-flex" id='projects'>
            <h1 className='arcade-theme-hero-text'>PROJECTS</h1>
            <ProjectCarousel projects={projects} />
        </div>
        </>
    )
}

export default Projects;