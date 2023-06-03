import React, { useState } from 'react'

type HandleHobbyEnterT = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, hobby: string) => void;

interface HobbiesListProps {
    handleHobbyEnter:HandleHobbyEnterT
}

const HobbiesList: React.FC<HobbiesListProps> = ({ handleHobbyEnter }) => {
    const hobbiesList: string[] = [
        'sewing',
        'crocheting',
        'whittling',
        'painting',
        'pyrography',
        // 'Tetris',
      ]

    const tetris = () => {
    console.log('tetris')
    }

    return (
        <>
        {hobbiesList.map((hobby:string, i:number) => (
            <React.Fragment key={`hobby-${i}`}>
            <span
            className='emphasis'
            onMouseEnter={(e) => handleHobbyEnter(e, hobby)}
            >
            {hobby}</span>
            <span
            style={{color:'rgb(54, 69, 84)',}}
            >, &nbsp;</span>
            </React.Fragment >
        ))}
        <span
        className='emphasis'
        onMouseEnter={(e) => {tetris()}}
        >
        Tetris</span>
        <span
        style={{color:'rgb(54, 69, 84)',}}
        >, &nbsp;</span>

        and making little&nbsp;
        <span className='emphasis' onMouseEnter={(e) => handleHobbyEnter(e, 'popsicle')}>
        popsicle stick houses
        </span>
        &nbsp;for my parakeet,&nbsp;
        <span className='emphasis' onMouseEnter={(e) => handleHobbyEnter(e, 'bird')}>
        Samwise
        </span>.
        </>
    )
}

export default HobbiesList;