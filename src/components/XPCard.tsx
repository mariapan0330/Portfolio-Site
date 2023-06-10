import React, { useState, useEffect } from 'react'
import '../styles/XPCard.css'

interface XPCardProps {
    image?: string;
    position: string;
    company: string;
    date: string;
    summary: string;
    last?: boolean;
    description: React.JSX.Element;
}

const XPCard: React.FC<XPCardProps> = ({ image, position, company, summary, date, description, last }) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false)
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
    <div className="xp-item-container">
    <div className="xp-line-container">
        <img 
            src={require('../images/experience/xp square.png')} 
            className='xp-square' 
            style={isExpanded ? {filter: 'drop-shadow(0px 0px 20px white)'} : {}}
            onClick={()=>{setIsExpanded(e => !e)}}/>
        {last? <></> : <img src={require('../images/experience/xp line.png')} className='xp-line' />}
        {isExpanded && !last &&
        <img src={require('../images/experience/xp line.png')} className='xp-extra-line' />
        }
    </div>
    <div className="xp-card-container">

        <div className="xp-card" onClick={()=>{setIsExpanded(e => !e)}}>
            {isExpanded && image && <img 
                // src={require(`../images/experience/${image}.png`)} 
                alt={position} 
                className='xp-card-image'
                onClick={() => {handleImgOpen()}}
                />}
            <div className='xp-card-title'>{position}</div>
            <p className='xp-card-tech'>{company}</p>
            <p className='xp-card-tech'>{date}</p>
            <p className='xp-card-tech'>{summary}</p>
            {isExpanded && <p className='xp-card-desc'>{description}</p>}
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
    </div>
    </div>
    </>
  )
}

export default XPCard;
