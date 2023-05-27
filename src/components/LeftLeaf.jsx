import React, { useState } from 'react'
import '../styles/Leaves.css'
import Plx from 'react-plx'

export default function LeftLeaf(props) {

    const animate = (speed) => {
      return [
        {
            // vertical start and end (how long it takes to get to last position):
          start: 0,
          end: speed,
          properties: [
            {
                // translateX start and end:
              startValue: 0,
              endValue: -1500,
              property: "translateX",
            },
          ],
        },
      ]
    }

  return (
    <>
    <Plx parallaxData={animate(1300)} className="left-leaf-plx">
        <img className='left-leaf-img' src={require("../images/leaf L-1.png")} alt="background" />
    </Plx>
    <Plx parallaxData={animate(1700)} className="left-leaf-plx">
        <img className='left-leaf-img' src={require("../images/leaf L-2.png")} alt="background" />
    </Plx>
    <Plx parallaxData={animate(2000)} className="left-leaf-plx">
        <img id='l-leaf-3' className='left-leaf-img' src={require("../images/leaf L-3.png")} alt="background" />
    </Plx>
    </>
  )
}
