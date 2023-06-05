import React, { useState, useEffect } from 'react'

interface ProjectCardProps {
    image: string;
    title: string;
    live?: string;
    repo?: string;
    technologies: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, technologies, live, repo }) => {
    const [liveRepo, setLiveRepo] = useState<React.ReactElement>(<p></p>)
    const [hasLive, setHasLive] = useState<boolean>(live !== '')
    const [hasRepo, setHasRepo] = useState<boolean>(repo !== '')

    useEffect(() => {
        console.log(hasLive, live)
    }, [live])

    // useEffect(() => {
    //     if (live !== '' && repo === '') {
    //         setLiveRepo(<p className='project-card-links'><a href={live}>LIVE</a></p>)
    //     } else if (live === '' && repo !== ''){
    //         setLiveRepo(<p className='project-card-links'><a href={repo}>REPO</a></p>)
    //     } else if (live !== '' && repo !== '') {
    //         setLiveRepo(<p className='project-card-links'><a href={live}>LIVE</a> | <a href={repo}>REPO</a></p>)
    //     }
    // }, [])

  return (
    <>
    <div className="project-card">
        <img src={require(`../images/projects/${image}.png`)} alt={title} className='project-card-image'/>
        <h1 className='project-card-title'>{title}</h1>
        {/* {liveRepo} */}
        <p className='project-card-links'>
            {live && <a href={live} target='_blank'>LIVE</a>}
            {live && repo && ' | '}
            {repo && <a href={repo} target='_blank'>REPO</a>}
            </p>
        <p className='project-card-tech'>{technologies}</p>
    </div>
    </>
  )
}

export default ProjectCard;
