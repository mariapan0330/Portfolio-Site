import React, { useState } from 'react'
import '../styles/Experience.css'
import Maze from './Maze'
import XPCard from './XPCard'
import Plx from 'react-plx'

type XPInfo = {
  image?: string;
  position: string;
  company: string;
  date: string;
  summary: string;
  last?: boolean;
  description: React.JSX.Element;
}

const Experience:React.FC = () => {

  const experiences: XPInfo[] = [
    {
      position:'Code Coach',
      company:'theCoderSchool Northshore',
      date:'Jan 2023 - present',
      summary: 'Taught kids how to code in tutoring-style sessions.',
      description: 
      <>
      - Designed engaging and personalized lesson plans to teach students aged 7 to 15 to code in Scratch, Python, and JavaScript, and fostered curiosity and logical reasoning in both one-on-one and group settings.
      <br/>
      <br/>
      - Curated a collection of resources to streamline the setup process, particularly via online IDEs like Replit and CodePen.
      <br/>
      <br/>
      - Leveraged playful logic-practicing sites like CodeWars and CodeCombat, and visual libraries like Python’s Pygame and JavaScript’s colors module so students can engage with the fun and logic of coding without too much overhead.
      <br/>
      <br/>
      - Earned Employee Spotlight of the Month for April 2023 in recognition of my diligence, rapport, and effective teaching.
      </>
    },
    {
      // image:'software dev',
      position:'Software Developer',
      company:'Coding Temple',
      date:'July 2022 - Sept 2022',
      summary:'Took a 10-week deep-dive into software development.',
      description:
      <>
      - Developed a blog web application that used Flask with SQLAlchemy to save user data in a PostgreSQL database and created Flask API endpoints which allowed authenticated users to access this data.
      <br/>
      <br/>
      - Handled the retrieved data with React and Node.js to create an intuitive UI that ensured a seamless experience for users creating a new profile, viewing other users’ profiles and creating, editing, and deleting their own posts.
      <br/>
      <br/>
      - Crafted and hosted a weather application, connecting a public weather API and using Flask’s Jinja Templating to achieve an elegant UI with effective search functionality.
      <br/>
      <br/>
      - Launched a Flask phonebook web application that allows authenticated users to create, retrieve, edit, and delete their entries. Hosted this project on Heroku and later migrated it to Glitch.

      </>
    },
    {
      // image: 'Etsy shop',
      position: 'Small Business Owner',
      company: 'LittleBirdBigIdeas',
      date: 'July 2021 - Present',
      summary: 'Started a shop selling my handmade crochet patterns.',
      description:
      <>
      - Established an Etsy shop with coherent branding and consistent, high-quality products achieved by implementing market research.
      <br/>
      <br/>
      - Modified products and sales in advance of holidays and popular culture events to prepare for changes in consumer interests.
      <br/>
      <br/>
      - Resolved questions and concerns and handled commissions to achieve a seamless, friendly customer experience.
      </>
    },
    {
      // image: 'Public Relations Officer',
      position: 'Public Relations Officer',
      company: 'Q Soc',
      date: 'December 2019 - May 2021',
      summary: 'Handled graphic design and social media in a college-sponsored society.',
      last: true,
      description:
      <>
      - Developed a distinct branding for the society recognizable across social media platforms, a community blog, and physical posters.
      <br/>
      <br/>
      - Streamlined the recruitment of over 300 members, promoted 3 large events a week, and emailed members weekly.
      <br/>
      <br/>
      - Managed a team working across 7 time zones dedicated to the production of the society’s magazine.
      </>
    },
  ]

  return (
    <>
    <Maze />
    <div className='' id='xp'>
        <div className="arcade-theme-hero-text xp-hero-text">
        Experience
        </div>
        {experiences.map((val, i) =>
            <XPCard 
            image={val.image}
            position={val.position} 
            company={val.company} 
            date={val.date}
            summary={val.summary}
            last={val.last}
            description={val.description} />
        )}
        {
        // <div className="xp-end-line-flex">
        //   <div className="xp-end-line-container">
        //       <img 
        //           src={require('../images/experience/xp square.png')} 
        //           className='xp-end-square' 
        //           />
        //       {/* <img src={require('../images/experience/xp line.png')} className='xp-line' /> */}
        //   </div>
        // </div>
        }
    </div>
    </>
  )
}

export default Experience;