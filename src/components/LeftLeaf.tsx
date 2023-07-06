import React from "react";
import "../styles/Leaves.css";
import Plx from "react-plx";
import PLXItem from "src/types/plx-item";

const LeftLeaf: React.FC = () => {
  const animate = (speed: number, start: number): PLXItem[] => {
    return [
      {
        // vertical start and end (how long it takes to get to last position):
        start: 0,
        end: speed,
        properties: [
          {
            // translateX start and end:
            startValue: start,
            endValue: -56,
            unit: "vw",
            property: "translateX",
          },
        ],
      },
    ];
  };

  return (
    <>
      <div className="leaves-container">
        <Plx parallaxData={animate(1300, 0)} className="leaf-plx">
          <img
            className="leaf-img"
            src={require("../images/leaf L-1.png")}
            alt="background"
          />
        </Plx>
        <Plx parallaxData={animate(1700, 0)} className="leaf-plx">
          <img
            className="leaf-img"
            src={require("../images/leaf L-2.png")}
            alt="background"
          />
        </Plx>
        <Plx parallaxData={animate(2000, 0)} className="leaf-plx">
          <img
            id="l-leaf-3"
            className="leaf-img"
            src={require("../images/leaf L-3.png")}
            alt="background"
          />
        </Plx>
      </div>
    </>
  );
};

export default LeftLeaf;
