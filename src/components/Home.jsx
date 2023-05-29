import React, { useState, useEffect } from 'react'
import '../styles/Home.css'
import IAm from './IAm'

export default function Home() {
    // TODO: maybe break the "I am -" stuff into its own component so you can move it
    return (
        <>
        <div id="home">
            <div className="component" id='home-container'>
                <h1 id='hi-im'>Hi, I'm</h1> <br/> <br/>
                <h1 id='main-name'>Maria</h1>
                <IAm />
            </div>
        </div>
        </>
    )
}