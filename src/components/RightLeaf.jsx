import React from 'react'
import '../styles/Leaves.css'
import Plx from 'react-plx'

export default function RightLeaf(props) {
    const animation = [
        {
            // vertical start and end (how long it takes to get to last position):
          start: 0,
          end: 1000,
          properties: [
            {
                // translateX start and end:
              startValue: 800,
              endValue: 1500,
              property: "translateX",
            },
          ],
        },
      ];

  return (
    <>
    <Plx parallaxData={animation} id="right-leaf-plx">
        <img id='right-leaf-img' src={require("../images/leaf.png")} alt="background" />
      </Plx>
    </>
  )
}
