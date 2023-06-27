import React, { useState } from "react";
import "../styles/XPCard.css";

interface XPCardProps {
  images?: string[];
  position: string;
  company: string;
  date: string;
  summary: React.JSX.Element;
  last?: boolean;
  description: React.JSX.Element;
  handleOverlayOpen: Function;
}

const XPCard: React.FC<XPCardProps> = ({
  images,
  position,
  company,
  summary,
  date,
  description,
  last,
  handleOverlayOpen,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <>
      <div className="xp-card-container">
        {/* column 1: just the flower node */}
        <div className="xp-card-col-1">
          <img
            src={require("../images/experience/xp flower.png")}
            alt='Flower nodes'
            className="xp-flower"
            style={
              // when expanded, keep a pink drop shadow on flower so you know it's open
              isExpanded
                ? { filter: "drop-shadow(0px 0px 20px var(--teal))" }
                : {}
            }
            onClick={() => {
              setIsExpanded((e) => !e);
            }}
          />
        </div>

        {/* column 2: the xp card */}
        <div className="xp-card-col-2">
          <div className="xp-card">
            {/* ITEM 1: Images, which are only shown when card is expanded. 
            Each image can be clicked on to open a preview of it in overlay. */}
            <div
              className={
                images && isExpanded
                  ? "xp-card-images-container"
                  : "xp-card-closed"
              }
            >
              {/* map of images in case there's more than 1. */}
              {images &&
                images.map((image, i) => (
                  <img
                    key={`xpImage-${i}`}
                    src={require(`../images/experience/${image}`)}
                    alt={position}
                    className={isExpanded ? "xp-card-image" : "xp-card-closed"}
                    // className='xp-card-image'
                    onClick={() => {
                      handleOverlayOpen(
                        require(`../images/experience/${image}`)
                      );
                    }}
                  />
                ))}
            </div>

            {/* ITEM 2: job position, which shows all the time.
            When clicked, toggles whether or not the card is expanded. */}
            <div
              className="xp-card-position xp-link"
              onClick={() => {
                setIsExpanded((prev) => !prev);
              }}
            >
              {position}
            </div>

            {/* ITEM 3: job compoany, shows all the time. */}
            <p className="xp-card-company">{company}</p>

            {/* ITEM 4: job dates, shows all the time. */}
            <p className="xp-card-date">{date}</p>

            {/* ITEM 5: short summary of job responsibilities, shows when NOT expanded (closes when expanded). */}
            {isExpanded || <p className="xp-card-summary">{summary}</p>}

            {/* ITEM 6: whole responsibilities description; only included when expanded. */}
            <p
              className={isExpanded ? "xp-card-description" : "xp-card-closed"}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default XPCard;
