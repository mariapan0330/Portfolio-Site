import React, { useState, useEffect } from "react";
import "../styles/About.css";
import "../styles/HobbiesList.css";
import SkillsList from "./SkillsList";
import HobbiesList from "./HobbiesList";
import LeafBorder from "./LeafBorder";
import Plx from "react-plx";
import ResumeBtn from "./ResumeBtn";

type PLXItem = {
  start: string | number;
  end: string | number;
  duration?: string | number;
  properties: {
    startValue: number;
    endValue: number;
    property: string;
  }[];
};

type HandleHobbyEnterT = (
  e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
  hobby: string
) => void;

const About: React.FC = () => {
  const [isDrawing, setIsDrawing] = useState<boolean>(true);
  const [showTetris, setShowTetris] = useState<boolean>(false);
  const [animateTetris, setAnimateTetris] = useState<boolean>(false);
  const [currHobby, setCurrHobby] = useState<string>("");
  const [currTetris, setCurrTetris] = useState<string>("i");
  const tetrisPieces: string[] = ["t", "s", "z", "l", "i", "o"];

  useEffect(() => {
    // console.log('show tetris has been activated')
    if (showTetris) {
      setAnimateTetris(true);
      let num: number = Math.floor(Math.random() * 6);
      setCurrTetris(tetrisPieces[num]);

      // wait 2000ms for the piece to finish falling then set it to false
      const tetrisTimeout: NodeJS.Timeout = setTimeout(() => {
        setAnimateTetris(false);
        setShowTetris(false);
      }, 2000);
      return () => {
        clearTimeout(tetrisTimeout);
      };
    }
  }, [showTetris, animateTetris, currTetris]);

  // self portrait carousel
  useEffect(() => {
    // every 4000ms, toggle the self-portrait to the drawing
    const wordsInterval: NodeJS.Timeout = setInterval(() => {
      setIsDrawing((prevState) => !prevState);
    }, 4000);

    return () => {
      clearInterval(wordsInterval);
    };
  }, []);

  const aboutPLX: PLXItem[] = [
    {
      // start moving when I am at [start], reach end position when I'm at [end]
      start: "10vh",
      end: "70vh",
      properties: [
        {
          //   starts 600px(?) to the right of its normal placement
          startValue: 600,
          endValue: 0,
          property: "translateX",
        },
      ],
    },

    {
      start: "10vh",
      end: "70vh",
      properties: [
        {
          //   starts 600px(?) to the right of its normal placement
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },
      ],
    },
  ];

  const handleHobbyEnter: HandleHobbyEnterT = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    hobby: string
  ) => {
    // when the mouse hovers over the current hobby link, set the current hobby to it
    setCurrHobby(hobby);
  };

  return (
    <>
      <div className="about-bg">
        {/* first: Leaf Border */}
        <LeafBorder />
        {/* if tetris is active, do the tetris animation */}
        {showTetris ? (
          <img
            src={require(`../images/tetris/tetris-${currTetris}.png`)}
            className={`${
              animateTetris ? "tetris-piece-after" : "tetris-piece-before"
            }`}
          />
        ) : (
          <></>
        )}
        {/* about flex: contains col 1 (about paragraph and skills list) and col 2 (images) */}
        <div id="about">
          {/* ================================================ */}
          {/* =                                              = */}
          {/* =            Column 1: About column            = */}
          {/* =                                              = */}
          {/* ================================================ */}
          <div className="about-col-1">
            <Plx parallaxData={aboutPLX} className="">
              {/* C1R1: About title and view resume*/}
              <div className="hero-and-resume">
                <div
                  id="about-hero-text"
                  onMouseEnter={(e) => {
                    handleHobbyEnter(e, "");
                  }}
                >
                  About
                </div>
              </div>

              {/* C1R3: About Paragraph */}
              <h2 className="about-p">
                &emsp; Hi there! I'm Maria, friendly neighborhood software
                developer with a background in&nbsp;
                <span
                  className="emphasis"
                  style={{ cursor: "auto" }}
                  onMouseEnter={(e) => {
                    handleHobbyEnter(e, "");
                  }}
                >
                  psychology
                </span>
                {"\u00A0"}
                who finds her niche in the balance of&nbsp;
                <span
                  className="emphasis"
                  style={{ cursor: "auto" }}
                  onMouseEnter={(e) => {
                    handleHobbyEnter(e, "");
                  }}
                >
                  logic and creativity
                </span>
                .
                <br />
                &emsp; When I'm not making and fixing bugs, I enjoy all sorts of
                old-lady activities like&nbsp;
                {/* HobbiesList component */}
                <HobbiesList
                  handleHobbyEnter={handleHobbyEnter}
                  setShowTetris={setShowTetris}
                />
              </h2>
            </Plx>

            {/* C1R4: Skills title and SkillsList */}
            <div className="about-skills">
              <div id="about-skills-title">Skills</div>
              {/* Skills List component */}
              <SkillsList />
            </div>
          </div>

          {/* ================================================ */}
          {/* =                                              = */}
          {/* =            Column 2: Images column           = */}
          {/* =                                              = */}
          {/* ================================================ */}
          <div className="about-col-2">
            {/* if a current hobby exists, show its image */}
            {currHobby ? (
              <>
                <img
                  src={require(`../images/hobbies/${currHobby}.jpg`)}
                  className="hobby-img"
                />
              </>
            ) : (
              // if no current hobby exists, show the background leaf with alternating self portrait/photo
              <>
                <div className="about-image-carousel">
                  <img
                    src={require("../images/one-big-leaf.png")}
                    id="one-big-leaf"
                    className="about-image"
                    alt="leaf"
                  />
                  <img
                    src={require("../images/selfportrait.png")}
                    id="self-portrait"
                    className="about-image"
                    // if it is on the drawing, make drawing opacity 100% otherwise just 0 so it is always loaded in
                    style={isDrawing ? { opacity: "100%" } : { opacity: "0" }}
                    alt="self-portrait"
                  />
                  <img
                    src={require("../images/selfphoto.png")}
                    id="self-photo"
                    // if it is not on the drawing (so, it is on the photo), make drawing opacity 100% otherwise just 0 so it is always loaded in
                    style={isDrawing ? { opacity: "0" } : { opacity: "100%" }}
                    className="about-image"
                    alt="self-portrait"
                  />
                  {/* <img
                    src={require("../images/flower corner.png")}
                    className="about-image flower-corner"
                  /> */}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
