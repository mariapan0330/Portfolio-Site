import React, { useState, useEffect } from "react";
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
  handleOverlayOpen
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <>
      <div className="xp-item-container">
        <div className="xp-line-container">
          <img
            src={require("../images/experience/xp square.png")}
            className="xp-square"
            style={
              isExpanded ? { filter: "drop-shadow(0px 0px 20px white)" } : {}
            }
            onClick={() => {
              setIsExpanded((e) => !e);
            }}
          />
          {last ? (
            <></>
          ) : (
            <img
              src={require("../images/experience/xp line.png")}
              className="xp-line"
            />
          )}
          {isExpanded && !last && (
            <img
              src={require("../images/experience/xp line.png")}
              className="xp-extra-line"
            />
          )}
        </div>
        <div className="xp-card-container">
          <div className="xp-card">
            <div
              className={
                images && isExpanded
                  ? "xp-card-images-container"
                  : "xp-card-closed"
              }
            >
              {images &&
                images.map((image, i) => (
                  <img
                    key={`xpImage-${i}`}
                    src={require(`../images/experience/${image}`)}
                    alt={position}
                    className={isExpanded ? "xp-card-image" : "xp-card-closed"}
                    // className='xp-card-image'
                    onClick={() => {
                      handleOverlayOpen(require(`../images/experience/${image}`))
                    }}
                  />
                ))}
            </div>
            <div
              className="xp-card-position xp-link"
              onClick={() => {
                setIsExpanded((e) => !e);
              }}
            >
              {position}
            </div>
            <p className="xp-card-company">{company}</p>
            <p className="xp-card-date">{date}</p>
            {isExpanded || <p className="xp-card-summary">{summary}</p>}
            <p className={isExpanded ? "xp-card-desc" : "xp-card-closed"}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default XPCard;
