import React, { useState, useEffect } from 'react'
import '../styles/XPCard.css'

interface XPCardProps {
    image: string;
    title: string;
    live?: string;
    repo?: string;
    technologies: string;
}

const XPCard: React.FC<XPCardProps> = ({ image, title, technologies, live, repo }) => {
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
    <div className="XP-card">
        <img 
            // src={require(`../images/experience/${image}.png`)} 
            alt={title} 
            className='XP-card-image'
            onClick={() => {handleImgOpen()}}
            />
        <h1 className='XP-card-title'>{title}</h1>
        {/* {liveRepo} */}
        <p className='XP-card-links'>
            {live && <a href={live} target='_blank'>LIVE</a>}
            {live && repo && ' | '}
            {repo && <a href={repo} target='_blank'>REPO</a>}
            </p>
        <p className='XP-card-tech'>{technologies}</p>
    </div>
    {enlargeImg && 
        <div className="img-enlarged-container" onClick={() => handleImgClose()}>
            <img 
            // src={require(`../images/experience/${image}.png`)} 
            className='img-enlarged'
            title='Click anywhere to close'
             />
        </div>
    }
    </>
  )
}

export default XPCard;
