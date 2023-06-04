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
      <div className="projects-carousel-btn-flex">
        <h1 className='projects-carousel-btn'>&lt;&lt;&lt;</h1>
        <h1 className='projects-carousel-btn'>&gt;&gt;&gt;</h1>
      </div>
    </div>
  )
}

export default ProjectCarousel;