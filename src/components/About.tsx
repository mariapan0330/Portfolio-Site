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
        ]
    
    return (
        <>
        <img src={require("../images/leaf-border.png")} alt="" id='leaf-border' />
        <div className="about-bg">
            <div className="component" id='about'>
                <Plx parallaxData={aboutPLX}>
                    <div id="about-hero-text">
                        About
                    </div>
                </Plx>
            </div>
        </div>
        </>
    )
}

export default About;