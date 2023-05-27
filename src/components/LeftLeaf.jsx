import React from 'react'
import '../styles/Leaves.css'
import Plx from 'react-plx'

export default function LeftLeaf(props) {
    const animation = [
        {
            // vertical start and end (how long it takes to get to last position):
          start: 0,
          end: 1000,
          properties: [
            {
                // translateX start and end:
              startValue: -800,
              endValue: -1500,
              property: "translateX",
            },
          ],
        },
      ];

  return (
    <>
    <Plx parallaxData={animation} id="left-leaf-plx">
        <img id='left-leaf-img' src={require("../images/leaf.png")} alt="background" />
      </Plx>
    </>
  )
}
