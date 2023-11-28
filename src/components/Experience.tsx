import React from "react";
import "../styles/Experience.css";
import Maze from "./Maze";
import XPCard from "./XPCard";
import Plx from "react-plx";
import LeafBorder from "./LeafBorder";
import PLXItem from "src/types/plx-item";
import XPInfo from "src/types/xp-info";

type ExperienceProps = {
  handleOverlayOpen: Function;
};

const Experience: React.FC<ExperienceProps> = ({ handleOverlayOpen }) => {
  const experiences: XPInfo[] = [
    {
      position: "Master of Science in Computer Science",
      company: "DePaul University, Jarvis College",
      date: "Dec 2023 - Dec 2025",
      summary: <></>,
      last: true,
      description: (
        <>
          - Deepening my understanding of computer science through onsite evening classes.
          <br />
          <br />- Engaging in hands-on project work, research, and theoretical studies.
        </>
      ),
    },
    {
      images: ["etsy.png"],
      position: "Small Business Owner",
      company: "LittleBirdBigIdeas",
      date: "July 2021 - Present (Self-Paced)",
      summary: (
        <>
          Started an&nbsp;
          <a
            href="https://www.etsy.com/shop/LittleBirdBigIdeas"
            target="_blank"
            rel="noreferrer"
            className="xp-link"
            title="Opens Etsy shop in a new tab"
          >
            Etsy shop <i className="fa-solid fa-arrow-up-right-from-square" />
          </a>
          &nbsp;selling my crochet patterns.
        </>
      ),
      description: (
        <>
          - Established an Etsy shop with coherent branding and consistent, high-quality
          products achieved by implementing market research.
          <br />
          <br />
          - Modified products and sales in advance of holidays and popular culture events
          to prepare for changes in consumer interests.
          <br />
          <br />- Resolved questions and concerns and handled commissions to achieve a
          seamless, friendly customer experience.
        </>
      ),
    },
    {
      images: ["snoozesense2.png"],
      position: "Software Developer in Residence",
      company: "Co.Lab",
      date: "Sept 2023 - Nov 2023 (Internship)",
      summary: (
        <>
          Worked as a developer with a cross-functional team to deliver a product from
          conceptualization to MVP.
        </>
      ),
      description: (
        <>
          - Led a small team of software developers, collaborating closely with the
          product management and design teams to conceptualize and implement features that
          aligned with the product vision.
          <br />
          <br />
          - Delivered technical specifications detailing the technology stack and feature
          feasibility, ensuring the project’s successful development within established
          timelines, and resulting in the delivery of a minimum viable product at the end
          of the program.
          <br />
          <br />
          - Integrated Firebase Authentication and spearheaded database design and
          implementation with Firestore, enabling secure data retrieval and storage for
          logged-in users while enforcing specific data input qualifications. of the
          program.
          <br />
          <br /> - Developed the user-facing application in React Native with Typescript,
          employing Expo-Router for tab and stack navigation and ensuring seamless user
          experiences on both Android and iOS. Translated the design team’s Figma layouts
          into an elegant and interactive user interface, demonstrating a strong attention
          to detail and commitment to an intuitive user experience.
        </>
      ),
    },
    {
      position: "Code Coach",
      company: "theCoderSchool Northshore",
      date: "Jan 2023 - Nov 2023 (Part-Time)",
      summary: <>Taught kids how to code in tutoring-style sessions.</>,
      description: (
        <>
          - Designed engaging and personalized lesson plans to teach students aged 7 to 15
          to code in Scratch, Python, and JavaScript, and fostered curiosity and logical
          reasoning in both one-on-one and group settings.
          <br />
          <br />
          - Curated a collection of resources to streamline the setup process,
          particularly via online IDEs like Replit and CodePen.
          <br />
          <br />
          - Leveraged playful logic-practicing sites like CodeWars and CodeCombat, and
          visual libraries like Python’s Pygame and JavaScript’s colors module so students
          can engage with the fun and logic of coding without too much overhead.
          <br />
          <br />- Earned Employee Spotlight of the Month for April 2023 in recognition of
          my diligence, rapport, and effective teaching.
        </>
      ),
    },
    {
      images: ["escape game.png"],
      position: "Software Developer Trainee",
      company: "Coding Temple",
      date: "July 2022 - Sept 2022 (Full-Time)",
      summary: (
        <>
          Took a&nbsp;
          <a
            href="https://www.credly.com/badges/c19b6df5-5dd4-415e-aaaf-fd1f16b1d5d8/linked_in?t=rixz72"
            target="_blank"
            rel="noreferrer"
            className="xp-link"
            title="Opens verified certificate in a new tab"
          >
            10-week deep-dive <i className="fa-solid fa-arrow-up-right-from-square" />
          </a>
          &nbsp;into software development.
        </>
      ),

      description: (
        <>
          - Developed a blog web application that used Flask with SQLAlchemy to save user
          data in a PostgreSQL database and created Flask API endpoints which allowed
          authenticated users to access this data.
          <br />
          <br />
          - Handled the retrieved data with React and Node.js to create an intuitive UI
          that ensured a seamless experience for users creating a new profile, viewing
          other users’ profiles and creating, editing, and deleting their own posts.
          <br />
          <br />- Crafted and hosted a weather application, connecting a public weather
          API and using Flask’s Jinja Templating to achieve an elegant UI with effective
          search functionality. Hosted this project on Heroku and later migrated it to
          Netlify.
        </>
      ),
    },
    // {
    //   images: ["PRO1.jpg", "PRO2.jpg"],
    //   position: "Public Relations Officer",
    //   company: "Q Soc",
    //   date: "Dec 2019 - May 2021",
    //   summary: (
    //     <>Handled graphic design and social media in a college-sponsored society.</>
    //   ),
    //   last: true,
    //   description: (
    //     <>
    //       - Developed a distinct branding for the society recognizable across social media
    //       platforms, a community blog, and physical posters.
    //       <br />
    //       <br />
    //       - Streamlined the recruitment of over 300 members, promoted 3 large events a
    //       week, and emailed members weekly.
    //       <br />
    //       <br />- Managed a team working across 7 time zones dedicated to the production
    //       of the society’s magazine.
    //     </>
    //   ),
    // },
    {
      position: "Bachelor of Arts",
      company: "University of Dublin, Trinity College",
      date: "Aug 2018 - May 2022",
      summary: <>Double major in Psychology and Sociology.</>,
      last: true,
      description: (
        <>
          - Graduated with second class honors, first division.
          <br />
          <br />
          - Gained experience in data analysis using Python's NumPy, Pandas, and
          Matplotlib, as well as IBM's SPSS, analyzing large data sets as a part of
          various research projects.
          <br />
          <br />- Developed soft skills including effective written and verbal
          communication, critical thinking, and networking.
        </>
      ),
    },
  ];

  const experienceTitlePLX: PLXItem[] = [
    {
      // start moving when I am at [start], reach end position when I'm at [end]
      start: "215vh",
      end: "300vh",
      properties: [
        //   starts 200px to the right of its normal placement and at 0% opacity
        { startValue: 100, endValue: 0, property: "translateX" },
        { startValue: 0, endValue: 1, property: "opacity" },
      ],
    },
  ];

  const timelinePLX: PLXItem[] = [
    // *** WHEN THE USER SCROLLS IN, FADE UP & IN ***
    {
      // start moving when I am at [start], reach end position when I'm at [end]
      start: "215vh",
      end: "280vh",
      properties: [
        //   starts 300px below and at 0% opacity
        { startValue: 300, endValue: 0, property: "translateY" },
        { startValue: 0, endValue: 1, property: "opacity" },
      ],
    },
  ];

  return (
    <>
      <Maze />

      <div className="xp-bg">
        <LeafBorder />
        <div className="" id="xp">
          {/* Hero Text */}
          <Plx parallaxData={experienceTitlePLX}>
            <div className="subsections-hero-text xp-hero-text">Experience</div>
          </Plx>

          {/* Timeline */}
          <Plx parallaxData={timelinePLX}>
            <div className="timeline-container">
              {/* just the image of the vine; repeats vertically */}
              <div className="vine-image"></div>

              {/* map of all xp cards and their flower nodes */}
              <div className="xp-cards">
                {experiences.map((val, i) => (
                  <XPCard
                    key={`xpCard-${i}`}
                    images={val.images}
                    position={val.position}
                    company={val.company}
                    date={val.date}
                    summary={val.summary}
                    last={val.last}
                    description={val.description}
                    handleOverlayOpen={handleOverlayOpen}
                  />
                ))}
              </div>
            </div>
          </Plx>
        </div>
      </div>
    </>
  );
};

export default Experience;
