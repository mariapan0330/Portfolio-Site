import React from 'react'
import '../styles/Leaves.css'
import Plx from 'react-plx'

export default function RightLeaf(props) {

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
              endValue: 1500,
              property: "translateX",
            },
          ],
        },
      ]
    }


  return (
    <>
    <Plx parallaxData={animate(1300)} className="leaf-plx">
        <img className='leaf-img' src={require("../images/leaf R-1.png")} alt="background" />
    </Plx>
    <Plx parallaxData={animate(1700)} className="leaf-plx">
        <img id='r-leaf-2' className='leaf-img' src={require("../images/leaf R-2.png")} alt="background" />
    </Plx>
    <Plx parallaxData={animate(2000)} className="leaf-plx">
        <img id='leaf-3' className='leaf-img' src={require("../images/leaf R-3.png")} alt="background" />
    </Plx>
    </>
  )
}
