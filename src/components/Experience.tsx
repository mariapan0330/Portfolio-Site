import React from 'react'
import '../styles/Experience.css'
import { Maze } from './Maze'
import XPCard from './XPCard'

export const Experience = () => {
  return (
    <>
    <Maze />
    <div className='' id='xp'>
        <div className="arcade-theme-hero-text xp-hero-text">
        Experience
        </div>
        
        {/* <XPCard image={'exImg'} title={'exTitle'} technologies={'exTech'} /> */}
    </div>
    </>
  )
}
