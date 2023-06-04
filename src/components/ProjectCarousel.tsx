import React from 'react'
import ProjectCard from './ProjectCard';

interface Project {
    image: string;
    title: string;
    live?: string;
    repo?: string;
    technologies: string;
}

interface ProjectCarouselProps {
    projects: Project[]
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  return (
    <div className="projects-carousel">
        <div className="projects-carousel-cards">
            <ProjectCard
                image={projects[0].image}
                title={projects[0].title}
                live={projects[0].live}
                repo={projects[0].repo}
                technologies={projects[0].technologies}
                />
        </div>
        <button className='projects-carousel-button'>&lt;</button>
        <button className='projects-carousel-button'>&gt;</button>
    </div>
  )
}

export default ProjectCarousel;