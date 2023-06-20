import React, { useState } from "react";
import "../styles/Projects.css";
import ProjectCarousel from "./ProjectCarousel";
import Plx from "react-plx";
import LeafBorder from "./LeafBorder";

type ProjectInfo = {
  image: string;
  title: string;
  live: string;
  repo: string;
  technologies: React.JSX.Element;
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

const Projects: React.FC<ProjectsProps> = ({ handleOverlayOpen }) => {
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

  const renderTechnologies = (techStack: string[]) => {
    // renders the technologies passed into it as a list of images with their titles right under them
    return (
      <>
        {techStack.map((tech, i) => (
          <>
            <div className="projects-tech-stack">
              <img
                key={`project-tech-${i}`}
                src={require(`../images/tech stack/${tech.toLowerCase()}.png`)}
                className="projects-tech-img"
                alt={tech}
              />
              <p className="projects-tech-description">{tech}</p>
            </div>
          </>
        ))}
      </>
    );
  };

  const projects: ProjectInfo[] = [
    // passing in the bits that create the project cards
    {
      image: "customer contact",
      title: "Customer Contact Form",
      live: "",
      repo: "https://github.com/mariapan0330/customer-contact-form",
      technologies: renderTechnologies(["React", "JavaScript"]),
    },
    {
      image: "escape game",
      title: "Escape Game",
      live: "",
      repo: "https://github.com/mariapan0330/Escape-Game",
      technologies: renderTechnologies(['React'])
      // (
      //   <>
      //     Flask, React, Python, JavaScript, JSX, CSS, NodeJS, PostgreSQL,
      //     Github, VSCode
      //   </>
      // ),
    },
    {
      image: "weather",
      title: "Weather Application",
      live: "https://stalwart-tiramisu-dee856.netlify.app/",
      repo: "https://github.com/mariapan0330/react-weather-app",
      technologies: renderTechnologies(['React']) 
      // technologies: (
      //   <>
      //     Flask, React, Python, JavaScript, JSX, CSS, NodeJS, Open Weather API
      //   </>
      // ),
    },
    {
      image: "blog",
      title: "Typewriter Blog",
      live: "",
      repo: "https://github.com/mariapan0330/React-Social-Media",
      technologies: renderTechnologies(['React']) 
      // technologies: (
      //   <>Flask, React, Python, JavaScript, JSX, CSS, NodeJS, PostgreSQL</>
      // ),
    },
    {
      image: "phonebook",
      title: "Big Phonebook",
      live: "https://gifted-radial-rugby.glitch.me/",
      repo: "https://github.com/mariapan0330/Phonebook",
      technologies: <>{renderTechnologies(['React'])}</>
      // technologies: (
      //   <>Flask, React, Python, JavaScript, JSX, CSS, NodeJS, PostgreSQL</>
      // ),
    },
  ];
  return (
    <>
      <div className="projects-flex" id="projects">
        <LeafBorder />
        <Plx parallaxData={projectTitlePLX}>
          <h1 id="projects-hero-text" className="subsections-hero-text">
            Projects
          </h1>
        </Plx>
        <ProjectCarousel
          projects={projects}
          handleOverlayOpen={handleOverlayOpen}
        />
      </div>
    </>
  );
};

export default Projects;
