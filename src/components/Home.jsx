import React, { useState, useEffect } from 'react'
import '../styles/Home.css'

export default function Home() {
    const words = [
        'a full-stack web developer',
        'an entrepreneur',
        'a creator',
        'short',
        'big brained',
        'JOHN CENA',
    ]
    const [wordIndex, setWordIndex] = useState(0)
    const [word, setWord] = useState(words[wordIndex])
    const [isFading, setIsFading] = useState(false)
    
    // Full-stack web developer and friendly neighborhood doodler actively
    // seeking an entry-level position in web development, software development, 
    // or data engineering.


    useEffect(() => {
        // executes the code then waits
        const interval = setInterval(() => {
            // EVERY [MS] MILLISECONDS
            // show next word and start fading color in
            setWordIndex(prev => (prev + 1) % words.length) 
            setIsFading(true)
        }, 3000)

        return () => {
            clearInterval(interval)
        }
    }, [words.length])

    useEffect(() => {
        // waits then executes the code
        const timeout = setTimeout(() => {
            // WAIT [MS] MILLISECONDS THEN
            setWord(words[wordIndex])
            setIsFading(false)
        }, 2700) // total interval - this timeout = amt of time that it's white
        // can't be longer than the interval above, otherwise useEffect will never update

        return () => {
            clearTimeout(timeout)
        }
    }, [wordIndex, words])

    return (
        <>
        <div id="home">
            <div className="component" id='home-container'>
                <h1 id='hi-im'>Hi, I'm</h1> <br/> <br/>
                <h1 id='main-name'>Maria</h1>
                <div id='description'>
                    <div className='empty-col'></div>
                    <h1 className='middle-column'>I am{" "}
                        <span
                            className={`description-word ${isFading ? 'fading' : ''}`}
                            style={{color: isFading ? '#161e16': 'white'}}
                            >{word}</span>.</h1>
                    <div className='empty-col'></div>
                </div>
            </div>
        </div>
        </>
    )
}