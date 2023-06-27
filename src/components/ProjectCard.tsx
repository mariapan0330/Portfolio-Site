import React from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  live?: string;
  repo?: string;
  technologies: React.JSX.Element;
  handleOverlayOpen: Function;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  technologies,
  live,
  repo,
  handleOverlayOpen,
}) => {

  return (
    <>
      <div className="project-card">
        {/* ITEM 1: Image; can open into image overlay */}
        <img
          src={require(`../images/projects/${image}.png`)}
          alt={title}
          className="project-card-image"
          onClick={() => {
            handleOverlayOpen(
              require(`../images/projects/${image}.png`),
              title
            );
          }}
        />
        <h1 className="project-card-title">{title}</h1>
        {/* {liveRepo} */}
        <p className="project-card-links">
          {live && (
            <a href={live} target="_blank" rel='noreferrer' title='Opens live site in a new tab'>
              LIVE&nbsp;<i className="fa-solid fa-arrow-up-right-from-square" />
            </a>
          )}
          {live && repo && <p className="project-card-or">|</p>}
          {repo && (
            <a href={repo} target="_blank" rel='noreferrer' title='Opens repository in a new tab'>
              REPO&nbsp;<i className="fa-solid fa-arrow-up-right-from-square" />
            </a>
          )}
        </p>
        {/* <p className="project-card-tech">{technologies}</p> */}
        <div className="project-card-tech">{technologies}</div>
      </div>
    </>
  );
};

export default ProjectCard;
