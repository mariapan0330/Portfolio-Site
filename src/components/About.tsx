import React, { useState, useEffect } from 'react'
import '../styles/About.css'
import '../styles/HobbiesList.css'
import SkillsList from './SkillsList'
import HobbiesList from './HobbiesList'
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

type HandleHobbyEnterT = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, hobby: string) => void;

const About: React.FC = () => {
    const [isDrawing, setIsDrawing] = useState<boolean>(true)
    const [showTetris, setShowTetris] = useState<boolean>(false)
    const [animateTetris, setAnimateTetris] = useState<boolean>(false)
    const [currHobby, setCurrHobby] = useState<string>('')
    const [currTetris, setCurrTetris] = useState<string>('i')
    const [o, setO] = useState<boolean>(false)
    const tetrisPieces:string[] = ['t', 's', 'z', 'l', 'i', 'o']

    useEffect(() => {
      // console.log('show tetris has been activated')
      if (showTetris){
        setAnimateTetris(true)
        let num:number = Math.floor(Math.random()*6)
        setCurrTetris(tetrisPieces[num])
        setO(currTetris === 'o')

        const tetrisTimeout: NodeJS.Timeout = setTimeout(() => {
          setAnimateTetris(false)
          setShowTetris(false)
        }, 2000)
        return () => {
          clearTimeout(tetrisTimeout)
        }
      }
    }, [showTetris, animateTetris, currTetris])


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
    
    const handleHobbyEnter: HandleHobbyEnterT = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, hobby:string) => {
        setCurrHobby(hobby)
    }
    
    return (
        <>
        <img src={require("../images/leaf-border.png")} alt="horizontal leaf border" id='leaf-border' />
        <div className="about-bg">
          {showTetris ? 
          <img src={require(`../images/tetris/tetris-${currTetris}.png`)}
          className={`${animateTetris ? 'tetris-piece-after' : 'tetris-piece-before'}`}
          /> : <></> }
          <div className="about-flex" id='about'>
                  <div className="about-col-1">
                      <Plx parallaxData={aboutPLX} className=''>
                          <div id="about-hero-text" onMouseEnter={(e)=>{handleHobbyEnter(e,'')}}>
                              About
                          </div>
                          <h2 className='about-p resume-p'><a className="resume-link emphasis" href={require('../images/Maria Panagos Resume.pdf')} target='_blank'>View my resume</a></h2>
                          <h2 className='about-p'>
                          &emsp; Hi there! I'm Maria, friendly neighborhood software developer with a background in&nbsp;
                          <span className='emphasis' style={{cursor:'auto'}} onMouseEnter={(e)=>{handleHobbyEnter(e,'')}}>psychology</span>{'\u00A0'}
                          who finds her niche in the balance of&nbsp;
                          <span className='emphasis' style={{cursor:'auto'}} onMouseEnter={(e)=>{handleHobbyEnter(e,'')}}>logic and creativity</span>.
                          {/* <br /> */}
                          <br />
                          &emsp; When I'm not making and fixing bugs, I enjoy all sorts of old-lady activities like&nbsp;
                          {/* HobbiesList component */}
                          <HobbiesList handleHobbyEnter={handleHobbyEnter} setShowTetris={setShowTetris} />
                          </h2>
                      </Plx>
                      <div className="about-skills">
                          <div id="about-skills-title">
                                  Skills
                          </div>
                          {/* Skills List component */}
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