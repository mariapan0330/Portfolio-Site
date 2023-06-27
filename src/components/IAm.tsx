import React, { useState, useEffect, useMemo } from "react";
import "../styles/IAm.css";

const IAm: React.FC = () => {
  const wordsList = [
    "a Software Developer!",
    // 'a friend.',
    "an entrepreneur.",
    "a nerd.",
    "an artist.",
    // 'a seamstress.',
    // 'a whittler.',
    // 'a crocheter.',
    "a creator.",
    "a statistician.",
    // 'big brained.',
  ];

  const words = useMemo(() => wordsList, []);

  const [word, setWord] = useState<string>(words[0]);
  // white: '#aecebd', green: '#3b4f44'
  const [myColor, setMyColor] = useState<string>("#3b4f44"); // default green

  // Every 3000ms, start The Loop over.
  // The Loop: fade white, wait 200ms(experiment), fade green.
  useEffect(() => {
    let i: number = 0;
    const wordsInterval: NodeJS.Timeout = setInterval(() => {
      i = (i + 1) % words.length;
      setMyColor("#aecebd"); // set white
      setTimeout(() => {
        setWord(words[i]);
        setMyColor("#3b4f44"); // set green after 200ms
      }, 200);
    }, 2000);

    return () => {
      clearInterval(wordsInterval);
    };
  }, [words]);

  return (
    <>
      <div id="description">
        <h1 className="middle-column">
          I am{" "}
          <span
            className={`description-word fading`}
            style={{ color: myColor }}
          >
            {word}
          </span>
        </h1>
      </div>
    </>
  );
};

export default IAm;
