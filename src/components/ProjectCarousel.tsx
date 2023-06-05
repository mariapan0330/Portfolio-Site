import React, { useState, useEffect } from 'react'
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
  const [startIdx, setStartIdx] = useState<number>(0) // inclusive
  const [endIdx, setEndIdx] = useState<number>(2) // exclusive
  const [continueR, setContinueR] = useState<boolean>(endIdx < projects.length)
  const [continueL, setContinueL] = useState<boolean>(startIdx > 0)

  useEffect(() => {
    setContinueL(startIdx > 0)
    setContinueR(endIdx < projects.length)
  }, [startIdx, endIdx])

  const handleForward = () => {
    setStartIdx(prev => prev+1)
    setEndIdx(prev => prev+1)
    console.log('forward', startIdx, endIdx)
  }
  
  const handleBackward = () => {
    setStartIdx(prev => prev-1)
    setEndIdx(prev => prev-1)
    console.log('back', startIdx, endIdx)
  }

  
  return (
    <div className="projects-carousel">
      <h1 
        className='projects-carousel-btn' 
        style={continueL ? {} : {filter:'opacity(0%)', cursor:'default'}}
        onClick={continueL ? ()=>{handleBackward()} : ()=>{console.log('noback', startIdx, endIdx)}}
        >
          &lt;</h1>
      <div className="projects-carousel-cards">
        {projects.slice(startIdx, endIdx).map((item,i) =>
          <ProjectCard
              key={`carousel-${i}`}
              image={item.image}
              title={item.title}
              live={item.live}
              repo={item.repo}
              technologies={item.technologies}
              />
          )}
      </div>
      <h1 
        className='projects-carousel-btn' 
        onClick={continueR ? ()=>{handleForward()} : ()=>{console.log('noforw', startIdx, endIdx)}} 
        style={continueR ? {} : {filter:'opacity(0%)', cursor:'default'}}
        >
          &gt;</h1>
    </div>
  )
}

export default ProjectCarousel;