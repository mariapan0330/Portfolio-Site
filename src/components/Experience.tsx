import React, { useState } from 'react'
import '../styles/Experience.css'
import Maze from './Maze'
import XPCard from './XPCard'
import Plx from 'react-plx'

type XPInfo = {
  image: string;
  position: string;
  company: string;
  date: string;
  description: string;
}

const Experience:React.FC = () => {

  const experiences: XPInfo[] = [
    {
      image:'code coach',
      position:'Code Coach',
      company:'theCoderSchool',
      date:'Jan 2023 - present',
      description:'Taught kids how to code in Scratch, Python, and JavaScript'
    },
    {
      image:'software dev',
      position:'Software Developer',
      company:'Coding Temple',
      date:'July 2022 - Sept 2022',
      description:'10-week deep dive into web development frameworks'
    },
  ]

  return (
    <>
    <Maze />
    <div className='' id='xp'>
        <div className="arcade-theme-hero-text xp-hero-text">
        Experience
        </div>
        {experiences.map((val, i) =>
            <XPCard 
            image={val.image} 
            position={val.position} 
            company={val.company} 
            date={val.date} 
            description={val.description} />
        )}
            {/* <XPCard image={'exImg'} position={'Code Coach'} company={'theCoderSchool'} date={'Jan 2023 - present'} description={'taught kids how to code.'} /> */}
    </div>
    </>
  )
}

export default Experience;