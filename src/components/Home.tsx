import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import IAm from "./IAm";
import ResumeBtn from "./ResumeBtn";

const Home: React.FC = () => {
  return (
    <>
      <div id="home">
        <div className="hi-im-container">
          <h1 id="hi-im">Hi, I'm</h1>
        </div>
        <h1 id="main-name">Maria</h1>
        <IAm />
        <ResumeBtn />
      </div>
    </>
  );
};

export default Home;
