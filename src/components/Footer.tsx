import React, { useState, useEffect } from "react";
import "../styles/Footer.css";
import Plx from "react-plx";

type PLXItem = {
  start: string | number;
  end?: string | number;
  duration?: string | number;
  properties: {
    startValue: number;
    endValue: number;
    property: string;
  }[];
};

const Footer: React.FC = () => {
  const contactLinks = [
    { img: "github.png", link: "https://github.com/mariapan0330" },
    { img: "linkedin.png", link: "https://www.linkedin.com/in/maria-panagos/" },
  ];

  const [copied, setCopied] = useState<boolean>(false); // toggled when the user copies the email address

  useEffect(() => {
    // activates when copied is toggled; if true, wait 2000ms (2s) then hide 'copied' notification again
    if (copied === true) {
      const copyTime: NodeJS.Timeout = setTimeout(() => {
        setCopied(false);
      }, 2000);
      return () => {
        clearTimeout(copyTime);
      };
    }
  }, [copied]);

  const footerPLX: PLXItem[] = [
    {
      // start moving when I am at [start], reach end position when I'm at [end]
      start: ".footer-start",
      // end: ".end-of-site",
      duration:'25vh',
      properties: [
        //   starts at 0% opacity
        { startValue: 0, endValue: 1, property: "opacity" },
      ],
    },
  ];

  return (
    <>
      {/* lonely container that indicates where to start the footer plx */}
      <div className="footer-start"></div>

      {/* footer container */}
      <div id="footer">
        {/* all of it has footerPLX; footer-info is also a flex row */}
        <Plx parallaxData={footerPLX} className="footer-info">

          {/* column 1: contact column */}
          <div className="footer-contact-col">
            {/* first item: email*/}
            <div className="footer-contact-item">
              <a
                className="footer-contact-link"
                // email doesnt have an external link, but can be copied to clipboard when clicked
                onClick={() => {
                  navigator.clipboard.writeText("maria.pan0330@gmail.com");
                  // sets copied bool to true, which lights up the 'copied to clipboard' message.
                  setCopied(true);
                }}
                title="Copy to clipboard"
              >
                <img
                  className="footer-contact-img"
                  src={require(`../images/contact links/email.png`)}
                />
                &nbsp;maria.pan0330@gmail.com
              </a>
              <div
                className="footer-copied"
                // sets opacity to 100% if the user has copied it, and back to 0 after 2000ms (see useEffect [copied])
                style={copied ? { opacity: "100%" } : { opacity: "0%" }}
              >
                &nbsp;Copied to clipboard!
              </div>
            </div>

            {/* second and third items: GitHub and LinkedIn*/}
            {/* the other links are mapped with the image and external link that opens in new tab */}
            {contactLinks.map((item, i) => (
              <div key={`footer-link-${i}`} className="footer-contact-item">
                <a
                  className="footer-contact-link"
                  href={item.link}
                  target="_blank"
                  title="Opens a new tab"
                >
                  <img
                    className="footer-contact-img"
                    src={require(`../images/contact links/${item.img}`)}
                  />
                  &nbsp;{item.link}&nbsp;<i className="fa-solid fa-arrow-up-right-from-square" />
                </a>
              </div>
            ))}
          </div>

          {/* column 2: repo column */}
          <div className="footer-repo-col">
            <div className="footer-title">
              Want to see how I made this site?
            </div>
            <div className="footer-repo-btn-container">
              <div className="footer-repo-btn">
                <a
                  href="https://github.com/mariapan0330/Personal-Website"
                  target="_blank"
                  title="Opens a new tab"
                >
                  View repository <i className="fa-solid fa-arrow-up-right-from-square" />
                </a>
              </div>
            </div>
          </div>
        </Plx>

        {/* end of site empty div to tell plx when to stop */}
        <div className="end-of-site"></div>
      </div>
    </>
  );
};

export default Footer;
