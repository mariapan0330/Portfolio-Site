import React, { useState, useEffect } from 'react'
import '../styles/About.css'
import SkillsList from './SkillsList'
import Plx from 'react-plx'

type PLXItem = {
  start: string | number;
  end: string | number;
  duration?: string | number;
  properties: {
    startValue: number;
    endValue: number;
    property: string;
  }[];
}

const About: React.FC = () => {
    const [isDrawing, setIsDrawing] = useState<boolean>(true)
    const [currHobby, setCurrHobby] = useState('')
    const [extras, setExtras] = useState('')

    const hobbiesList = [
      'sewing',
      'crocheting',
      'whittling',
      'painting',
      'pyrography',
      // 'Tetris',
      // 'popsicle stick houses',
      // 'Samwise'
    ]

    // self portrait carousel
    useEffect(() => {
        const wordsInterval: NodeJS.Timeout = setInterval(() => {
            setIsDrawing(prevState => !prevState)
        }, 4000)

        return () => {
            clearInterval(wordsInterval)
        }
    }, [])

    const aboutPLX: PLXItem[] = [
          {
              // start moving when I am at [start], reach end position when I'm at [end]
            start: '10vh',
            end: '70vh',
            properties: [
              {
                //   starts 600px(?) to the right of its normal placement
                startValue: 600,
                endValue: 0,
                property: "translateX",
              },
            ],
          },
          
          {
            start: '10vh',
            end: '70vh',
            properties: [
              {
                //   starts 600px(?) to the right of its normal placement
                startValue: 0,
                endValue: 1,
                property: 'opacity',
              },
            ]
          }
        ]
    
    const handleHobbyEnter = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, hobby:string) => {
      setCurrHobby(hobby)
    }
    
    const handleHobbyLeave = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, hobby:string) => {
      setCurrHobby('')
    }
    
    return (
        <>
        <img src={require("../images/leaf-border.png")} alt="horizontal leaf border" id='leaf-border' />
        <div className="about-bg">
            <div className="about-flex" id='about'>
                    <div className="about-col-1">
                        <Plx parallaxData={aboutPLX} className=''>
                            <div id="about-hero-text" onMouseEnter={(e)=>{handleHobbyEnter(e,'')}}>
                                About
                            </div>
                            <h2 className='about-p'>
                            &emsp; Hi there! I'm Maria, friendly neighborhood software developer with a background in&nbsp;
                            <span className='emphasis' style={{cursor:'auto'}} onMouseEnter={(e)=>{handleHobbyEnter(e,'')}}>psychology</span>{'\u00A0'}
                            who finds her niche in the balance of&nbsp;
                            <span className='emphasis' style={{cursor:'auto'}} onMouseEnter={(e)=>{handleHobbyEnter(e,'')}}>logic and creativity</span>.
                            {/* <br /> */}
                            <br />
                            {/* If you're looking for a versatile, passionate team member,
                            let's connect! Together we can bring your ideas to life.*/}
                            &emsp; When I'm not making and fixing bugs, I enjoy all sorts of old-lady activities like&nbsp;
                            
                            {hobbiesList.map((hobby:string) => (
                              <>
                              <span 
                              className='emphasis'
                              onMouseEnter={(e) => handleHobbyEnter(e, hobby)}
                              >
                              {hobby}</span>
                              <span
                              style={{color:'rgb(54, 69, 84)',}}
                              >, &nbsp;</span>
                              </>
                            ))}
                            and making little&nbsp;
                            <span
                            className='emphasis'
                            onMouseEnter={(e) => handleHobbyEnter(e, 'popsicle')}
                            >
                            popsicle stick houses
                            </span>
                            &nbsp;for my parakeet,&nbsp;
                            <span
                            className='emphasis'
                            onMouseEnter={(e) => handleHobbyEnter(e, 'bird')}
                            >
                            Samwise
                            </span>.
                            </h2>
                        </Plx>
                        <div className="about-skills">
                            <div id="about-skills-title">
                                    Skills
                            </div>
                            <SkillsList />
                        </div>
                    </div>
                    <div className="about-col-2">
                      { currHobby ? 
                      <>
                      <img src={require(`../images/hobbies/${currHobby}.jpg`)} className='hobby-img' />
                      </>
                      :
                        <>
                        <img src={require("../images/one-big-leaf.png")} id='one-big-leaf' className='about-image' alt='leaf'/>
                        <img 
                            src={require('../images/selfportrait.png')}
                            id='self-portrait'
                            className='about-image'
                            style={isDrawing ? {opacity:'100%'}: {opacity:'0'}}
                            alt='self-portrait'
                        />
                        <img 
                            src={require('../images/selfphoto.png')}
                            id='self-photo'
                            style={isDrawing ? {opacity:'0'}: {opacity:'100%'}}
                            className='about-image'
                            alt='self-portrait'
                        />
                        </>
                      }
                    </div>
            </div>
        </div>
        {/* <img src={require("../images/leaf-border.png")} alt="horizontal leaf border" id='leaf-border-end' /> */}
        </>
    )
}

export default About;