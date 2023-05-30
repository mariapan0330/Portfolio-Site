import React from 'react'
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
        <img src={require("../images/leaf-border.png")} alt="" id='leaf-border' />
        <div className="about-bg">
            <div className="component" id='about'>
                <Plx parallaxData={aboutPLX} className='about-flex'>
                  <div className="about-col-1">
                    <div id="about-hero-text">
                        About
                    </div>
                    <h2 className='about-p'>
                      I'm Maria, friendly neighborhood doodler and creator of many types of things.
                      I found my passion in coding through Minecraft, and I have been an avid programmer ever since.
                      My coding journey started with Minecraft. I spent countless hours creating games by assembling
                      Minecraft's built-in commands, and my dad recognized my process as programming.
                      <br />
                      He suggested I try a coding course, and I was hooked after my first Java lesson off Youtube. 
                    </h2>
                  </div>
                  <div className="about-col-2">
                    <img src={require("../images/selfportrait.png")} id='self-portrait' className='about-image' />
                    <img src={require("../images/selfphoto.png")} id='self-portrait' className='about-image' />
                  </div>
                </Plx>
            </div>
        </div>
        </>
    )
}

export default About;