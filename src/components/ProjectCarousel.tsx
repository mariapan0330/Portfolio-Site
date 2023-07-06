import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import Plx from "react-plx";

interface Project {
  image: string;
  title: string;
  live?: string;
  repo?: string;
  technologies: React.JSX.Element;
}

interface ProjectCarouselProps {
  projects: Project[];
  handleOverlayOpen: Function;
}

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

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
  projects,
  handleOverlayOpen,
}) => {
  const [startIdx, setStartIdx] = useState<number>(0); // inclusive
  const [endIdx, setEndIdx] = useState<number>(2); // exclusive
  const [continueR, setContinueR] = useState<boolean>(endIdx < projects.length);
  const [continueL, setContinueL] = useState<boolean>(startIdx > 0);

  useEffect(() => {
    setContinueL(startIdx > 0);
    setContinueR(endIdx < projects.length);
  }, [startIdx, endIdx, projects.length]);

  const handleForward = () => {
    setStartIdx((prev) => prev + 1);
    setEndIdx((prev) => prev + 1);
    console.log("forward", startIdx, endIdx);
  };

  const handleBackward = () => {
    setStartIdx((prev) => prev - 1);
    setEndIdx((prev) => prev - 1);
    console.log("back", startIdx, endIdx);
  };

  const projectCarouselPLX: PLXItem[] = [
    // *** WHEN THE USER SCROLLS IN, FADE UP & IN ***
    {
      // start moving when I am at [start], reach end position when I'm at [end]
      start: "140vh",
      end: "180vh",
      properties: [
        //   starts 300px below and at 0% opacity
        { startValue: 300, endValue: 0, property: "translateY" },
        { startValue: 0, endValue: 1, property: "opacity" },
      ],
    },
  ];

  return (
    <Plx parallaxData={projectCarouselPLX}>
      <div className="projects-carousel">
        <h1
          className="projects-carousel-btn"
          style={continueL ? {} : { filter: "opacity(0%)", cursor: "default" }}
          onClick={
            continueL
              ? () => {
                  handleBackward();
                }
              : () => {
                  console.log("noback", startIdx, endIdx);
                }
          }
        >
          &lt;
        </h1>
        <div className="projects-carousel-cards">
          {projects.slice(startIdx, endIdx).map((item, i) => (
            <ProjectCard
              key={`carousel-${i}`}
              image={item.image}
              title={item.title}
              live={item.live}
              repo={item.repo}
              technologies={item.technologies}
              handleOverlayOpen={handleOverlayOpen}
            />
          ))}
        </div>
        <h1
          className="projects-carousel-btn"
          onClick={
            continueR
              ? () => {
                  handleForward();
                }
              : () => {
                  console.log("noforw", startIdx, endIdx);
                }
          }
          style={continueR ? {} : { filter: "opacity(0%)", cursor: "default" }}
        >
          &gt;
        </h1>
      </div>
    </Plx>
  );
};

export default ProjectCarousel;
