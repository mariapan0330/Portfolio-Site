import React, { useState, useEffect } from 'react'
import '../styles/About.css'
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
    
    
    return (
        <>
        <img src={require("../images/leaf-border.png")} alt="horizontal leaf border" id='leaf-border' />
        <div className="about-bg">
            <div className="component" id='about'>
                <div className="about-flex">
                    <div className="about-col-1">
                        <Plx parallaxData={aboutPLX} className=''>
                            <div id="about-hero-text">
                                About
                            </div>
                            <h2 className='about-p'>
                            Hi there! I'm Maria, friendly neighborhood software developer who thrives on a
                            perfect balance of logic and creativity. 
                            I'm Maria, friendly neighborhood doodler, puzzle-lover, and creator of things.
                            I specialize in creating robust and exciting applications that leave users impressed.
                            </h2>
                        </Plx>
                    </div>
                    <div className="about-col-2">
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
                    </div>
                </div>
            </div>
        </div>
        {/* <img src={require("../images/leaf-border.png")} alt="horizontal leaf border" id='leaf-border-end' /> */}
        </>
    )
}

export default About;