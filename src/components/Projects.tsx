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
            title: 'Typewriter Blog1',
            live: 'abc',
            repo: 'repo',
            technologies: 'Flask, Python, React, JavaScript, NodeJS'
        },
        {
            image: 'blog',
            title: 'Typewriter Blog2',
            live: 'abc',
            repo: 'repo',
            technologies: 'Flask, Python, React, JavaScript, NodeJS'
        },
        {
            image: 'blog',
            title: 'Typewriter Blog3',
            live: '',
            repo: 'repo',
            technologies: 'Flask, Python, React, JavaScript, NodeJS'
        },
        {
            image: 'blog',
            title: 'Typewriter Blog4',
            live: 'abc',
            repo: '',
            technologies: 'Flask, Python, React, JavaScript, NodeJS'
        },
        {
            image: 'blog',
            title: 'Typewriter Blog5',
            live: 'abc',
            repo: '',
            technologies: 'Flask, Python, React, JavaScript, NodeJS'
        },
    ]
    return (
        <>
        <div className="projects-flex" id='projects'>
            <h1 className='projects-hero-text'>PROJECTS</h1>
            <ProjectCarousel projects={projects} />
        </div>
        </>
    )
}

export default Projects;