import React from "react";
import "../styles/Projects.css";
import ProjectCarousel from "./ProjectCarousel";
import Plx from "react-plx";
import LeafBorder from "./LeafBorder";
import PLXItem from "src/types/plx-item";
import ProjectInfo from "src/types/project-info";

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

  const checkImgExists = (tech: string) => {
    // returns true if the image exists and false if it doesn't
    try {
      require(`../images/tech stack/${tech.toLowerCase()}.png`);
      return true;
    } catch (err) {
      return false;
    }
  };

  const renderTechnologies = (techStack: string[]) => {
    // renders the technologies passed into it as a list of images with their titles right under them
    return (
      <>
        {techStack.map((tech, i) => (
            <div key={`project-tech-${i}`} className="projects-tech-stack">
              {checkImgExists(tech) && (
                // if an image exists, render the image too. Otherwise just the word.
                <img
                  src={require(`../images/tech stack/${tech.toLowerCase()}.png`)}
                  // key={`project-tech-img-${i}`}
                  className="projects-tech-img"
                  alt={tech}
                />
              )}
              <p className="projects-tech-description">{tech}</p>
            </div>
        ))}
      </>
    );
  };

  // noticed that the front end tech I use is mostly the same throughout.
  const frontendTech = ["React", "NodeJS", "HTML", "CSS", "JavaScript"];

  const projects: ProjectInfo[] = [
    // passing in the information to the project cards
    {
      image: "personal website",
      title: "This site!",
      live: "",
      repo: "https://github.com/mariapan0330/Personal-Website",
      technologies: renderTechnologies(
        frontendTech.slice(0, -1).concat(["TypeScript", "Netlify"])
      ),
    },
    {
      image: "customer contact",
      title: "Customer Contact Form",
      live: "",
      repo: "https://github.com/mariapan0330/customer-contact-form",
      technologies: renderTechnologies(frontendTech),
    },
    {
      image: "escape game",
      title: "Escape Game",
      live: "",
      repo: "https://github.com/mariapan0330/Escape-Game",
      technologies: renderTechnologies(
        frontendTech.concat(["Flask", "Python", "SQLAlchemy"])
      ),
    },
    {
      image: "weather",
      title: "Weather Application",
      live: "https://stalwart-tiramisu-dee856.netlify.app/",
      repo: "https://github.com/mariapan0330/react-weather-app",
      technologies: renderTechnologies(
        frontendTech.concat(["Netlify", "JSON", "Open Weather API"])
      ),
    },
    {
      image: "blog",
      title: "Typewriter Blog",
      live: "",
      repo: "https://github.com/mariapan0330/React-Social-Media",
      technologies: renderTechnologies(frontendTech.concat(["JSON"])),
    },
    {
      image: "phonebook",
      title: "Big Phonebook",
      live: "https://gifted-radial-rugby.glitch.me/",
      repo: "https://github.com/mariapan0330/Phonebook",
      technologies: renderTechnologies([
        "Bootstrap",
        "HTML",
        "CSS",
        "JavaScript",
        "Flask",
        "Python",
        "SQLAlchemy",
        // "Heroku (hosting service)",
      ]),
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
