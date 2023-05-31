import React, { MouseEventHandler, useState } from 'react'
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
    const [isHovering, setIsHovering] = useState<boolean>(false)

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
    const handleMouseEnter: React.MouseEventHandler<HTMLImageElement> = () => { setIsHovering(true) }

    const handleMouseLeave: React.MouseEventHandler<HTMLImageElement> = () => { setIsHovering(false) }
    
    
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
                            <a href=''>I'm Maria,</a> friendly neighborhood doodler and creator of many types of things.
                            I found my passion in coding through Minecraft, and I have been an avid programmer ever since.
                            My coding journey started with Minecraft. I spent countless hours creating games by assembling
                            Minecraft's built-in commands, and my dad <a href=''>recognized</a> my process as programming.
                            <br />
                            He suggested I try a coding course, and I was hooked after my first Java lesson off Youtube. 
                            </h2>
                        </Plx>
                    </div>
                    <div className="about-col-2">
                        <img src={require("../images/one-big-leaf.png")} id='one-big-leaf' className='about-image' alt='leaf'/>
                        <img 
                            src={isHovering ? require('../images/selfphoto.png') : require('../images/selfportrait.png')}
                            id={isHovering ? 'self-photo' : 'self-portrait'}
                            className='about-image'
                            alt='self-portrait'
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            
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