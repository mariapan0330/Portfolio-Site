import React from 'react'
import '../styles/Projects.css'
import ProjectCarousel from './ProjectCarousel';

const Projects: React.FC = () => {
    // PLAN: Sort of jarring transition to 80s arcade game theme
    // "Deal in" project cards (might change because doesn't really fit theme)
    // PROJECT CARD: expand on hover
        // top: image, plays gif on hover
        // middle: TITLE, LIVE | REPO links
        // bottom: Tech stack
    
    const projects = [
        {
            image: 'blog',
            title: 'Typewriter Blog',
            live: 'abc',
            repo: 'repo',
            technologies: 'Flask, Python, React, JavaScript, NodeJS'
        }
    ]
    return (
        <>
        <div className="projects-flex" id='projects'>
            <h1 className='projects-hero-text'>PROJECTS</h1>
            <ProjectCarousel projects={projects} />
            <h1>test</h1>
        </div>
        </>
    )
}

export default Projects;