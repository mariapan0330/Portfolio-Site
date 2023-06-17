import React, { useState } from "react";
import "../styles/Projects.css";
import ProjectCarousel from "./ProjectCarousel";
import Plx from "react-plx";

type ProjectInfo = {
  image: string;
  title: string;
  live: string;
  repo: string;
  technologies: string;
};

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

interface ProjectsProps {
  handleOverlayOpen: Function; 
}

const Projects: React.FC<ProjectsProps> = ({handleOverlayOpen}) => {
  // PLAN: Sort of jarring transition to 80s arcade game theme
  // "Deal in" project cards (might change because doesn't really fit theme)
  // PROJECT CARD: expand on hover
  // top: image, plays gif on hover
  // middle: TITLE, LIVE | REPO links
  // bottom: Tech stack

  const projectTitlePLX: PLXItem[] = [
    {
      // start moving when I am at [start], reach end position when I'm at [end]
      start: "115vh",
      end: "200vh",
      properties: [
        //   starts 200px to the LEFT of its normal placement
        { startValue: -200, endValue: 0, property: "translateX" },
        { startValue: 0, endValue: 1, property: "opacity" },
      ],
    },
  ];

  const projects: ProjectInfo[] = [
    {
      image: "customer contact",
      title: "Customer Contact Form",
      live: "",
      repo: "https://github.com/mariapan0330/customer-contact-form",
      technologies: "React, JavaScript, NodeJS, JSX, CSS, NodeJS",
    },
    {
      image: "escape game",
      title: "Escape Game",
      live: "",
      repo: "https://github.com/mariapan0330/Escape-Game",
      technologies:
        "Flask, React, Python, JavaScript, JSX, CSS, NodeJS, PostgreSQL, Github, VSCode",
    },
    {
      image: "weather",
      title: "Weather Application",
      live: "https://stalwart-tiramisu-dee856.netlify.app/",
      repo: "https://github.com/mariapan0330/react-weather-app",
      technologies:
        "Flask, React, Python, JavaScript, JSX, CSS, NodeJS, Open Weather API",
    },
    {
      image: "blog",
      title: "Typewriter Blog",
      live: "",
      repo: "https://github.com/mariapan0330/React-Social-Media",
      technologies:
        "Flask, React, Python, JavaScript, JSX, CSS, NodeJS, PostgreSQL",
    },
    {
      image: "phonebook",
      title: "Big Phonebook",
      live: "https://gifted-radial-rugby.glitch.me/",
      repo: "https://github.com/mariapan0330/Phonebook",
      technologies:
        "Flask, React, Python, JavaScript, JSX, CSS, NodeJS, PostgreSQL",
    },
  ];
  return (
    <>
      <div className="projects-flex" id="projects">
        <Plx parallaxData={projectTitlePLX}>
          <h1 className="arcade-theme-hero-text projects-hero-text">
            PROJECTS
          </h1>
        </Plx>
        <ProjectCarousel projects={projects} handleOverlayOpen={handleOverlayOpen} />
      </div>
    </>
  );
};

export default Projects;
