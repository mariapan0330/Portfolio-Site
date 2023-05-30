import React, { useState, useEffect } from 'react'
import '../styles/IAm.css'

const IAm: React.FC = () => {
    const words: string[] = [
        'a Software Developer!',
        'a friend.',
        'an entrepreneur.',
        'a nerd.',
        'an artist.',
        'a seamstress.',
        'a whittler.',
        'a crocheter.',
        'a creator.',
        'big brained.',
        'Batman.',
    ]
    const [iAm, setIAm] = useState<string>("I am ")
    const [word, setWord] = useState<string>(words[0])
    const [isWhite, setIsWhite] = useState<boolean>(true)
    // white: '#aecebd', green: '#3b4f44'
    const [myColor, setMyColor] = useState<string>('#3b4f44') // default green
    const [intervalTime, setIntervalTime] = useState<number>(2000) // just for me to more quickly mess with timings

    // Every 3000ms, start The Loop over. 
    // The Loop: fade white, wait 200ms(experiment), fade green.
    useEffect(() => {
        let i: number = 0
        const wordsInterval: NodeJS.Timeout = setInterval(() => {
            i = (i + 1) % words.length
            setMyColor('#aecebd') // set white
            setTimeout(() => {
                setWord(words[i])
                setMyColor('#3b4f44') // set green after 200ms
            }, 200)
        }, 2000)

        return () => {
            clearInterval(wordsInterval)
        }
    },[])


    return (
        <>
        <div id='description'>
            <div className='empty-col'></div>
            <h1 className='middle-column'>{iAm}
                <span
                    className={`description-word fading`}
                    style={{color: myColor}}
                    >{word}</span></h1>
            <div className='empty-col'></div>
        </div>
        </>
    )
}

export default IAm;