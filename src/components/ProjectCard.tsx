import React, { useState, useEffect } from 'react'

interface ProjectCardProps {
    image: string;
    title: string;
    live?: string;
    repo?: string;
    technologies: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, technologies, live, repo }) => {
    const [enlargeImg, setEnlargeImg] = useState<boolean>(false)
    const handleImgOpen = () => {
        setEnlargeImg(true)
        // hide overflow so you can't scroll the rest of the site if you enlarge the image
        document.body.style.overflow = 'hidden'
    }

    const handleImgClose = () => {
        setEnlargeImg(false)
        document.body.style.overflow = ''
    }

  return (
    <>
    <div className="project-card">
        <img 
            src={require(`../images/projects/${image}.png`)} 
            alt={title} 
            className='project-card-image'
            onClick={() => {handleImgOpen()}}
            />
        <h1 className='project-card-title'>{title}</h1>
        {/* {liveRepo} */}
        <p className='project-card-links'>
            {live && <a href={live} target='_blank'>LIVE</a>}
            {live && repo && ' | '}
            {repo && <a href={repo} target='_blank'>REPO</a>}
            </p>
        <p className='project-card-tech'>{technologies}</p>
    </div>
    {enlargeImg && 
        <div className="img-enlarged-container" onClick={() => handleImgClose()}>
            <img src={require(`../images/projects/${image}.png`)} className='img-enlarged' />
        </div>
    }
    </>
  )
}

export default ProjectCard;
