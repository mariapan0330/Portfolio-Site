import React, { useState, useEffect } from 'react'
import '../styles/Home.css'

export default function Home() {
    const words = [
        'a Software Developer!',
        'a friend.',
        'an entrepreneur.',
        'a nerd.',
        'an artist.',
        'a seamstress.',
        'a whittler.',
        'a crocheter.',
        'a creator.',
        '', // 9
        'big brained.',
        'Iron Man.',
    ]
    const [wordIndex, setWordIndex] = useState(0)
    const [iAm, setIAm] = useState("I am ")
    const [word, setWord] = useState(words[wordIndex])
    const [isFading, setIsFading] = useState(false)
    const [intervalTime, setIntervalTime] = useState(2000) // just for me to more quickly mess with timings
    
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
        }, intervalTime)
        
        return () => {
            clearInterval(interval)
        }
    }, [words.length, intervalTime])

    useEffect(() => {
        wordIndex === 1 ? setIntervalTime(6000) : setIntervalTime(2000)
    }, [wordIndex])

    useEffect(() => {
        // waits then executes the code
        const timeout = setTimeout(() => {
            // WAIT [MS] MILLISECONDS THEN
            
            wordIndex === 9 ? setIAm("... Does this sound like an obituary?") : setIAm("I am ")
            setWord(words[wordIndex])

            setIsFading(false)
        }, intervalTime - 100) // total interval - this timeout = amt of time that it's white
        // can't be longer than the interval above, otherwise useEffect will never update

        return () => {
            clearTimeout(timeout)
        }
    }, [wordIndex, words, iAm, intervalTime])

    return (
        <>
        <div id="home">
            <div className="component" id='home-container'>
                <h1 id='hi-im'>Hi, I'm</h1> <br/> <br/>
                <h1 id='main-name'>Maria</h1>
                <div id='description'>
                    <div className='empty-col'></div>
                    <h1 className='middle-column'>{iAm}
                        <span
                            className={`description-word ${isFading ? 'fading' : ''}`}
                            style={{color: isFading ? '#3b4f44': '#aecebd'}}
                            >{word}</span></h1>
                    <div className='empty-col'></div>
                </div>
            </div>
        </div>
        </>
    )
}