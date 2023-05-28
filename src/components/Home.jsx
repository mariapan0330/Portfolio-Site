import React, { useState, useEffect } from 'react'
import '../styles/Home.css'

export default function Home() {
    const words = ['a full-stack web developer', 'an entrepreneur', 'a creative']
    const [wordIndex, setWordIndex] = useState(0)
    const [word, setWord] = useState(words[wordIndex])

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex(prev => (prev + 1) % words.length)
        }, 3000)

        return () => {
            clearInterval(interval)
        }
    }, [words.length])

    useEffect(() => {
        const typingTimeout = setTimeout(() => {
            setWord(words[wordIndex])
        }, 500)

        return () => {
            clearTimeout(typingTimeout)
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
                    {/* <h2>
                        Full-stack web developer and friendly neighborhood doodler actively seeking an entry-level position in web development, software development, or data engineering.
                    </h2> */}
                    <h1 className='middle-column'>I am <span id='description-word' style={{color:`${myColor}`}}>{word}</span>.</h1>
                    <div className='empty-col'></div>
                </div>
            </div>
        </div>
        </>
    )
}