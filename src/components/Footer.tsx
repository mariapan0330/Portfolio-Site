import React from 'react'
import '../styles/Footer.css'
import Plx from 'react-plx';

type PLXItem = {
  start: string | number;
  end?: string | number;
  duration?: string | number;
  properties: {
    startValue: number;
    endValue: number;
    property: string;
  }[];
}

const Footer: React.FC = () => {

  
  const footerPLX: PLXItem[] = [
    {
        // start moving when I am at [start], reach end position when I'm at [end]
      start: '.footer-start', end:'.end-of-site',
      properties: [
        //   starts 300px below its normal placement and at 0% opacity
        { startValue: 300, endValue: 0, property: "translateY" },
        { startValue: 0, endValue: 1, property: 'opacity' },
      ],
    },
  ]

  return (
    <>
    <div className="footer-start"></div>
    <div id='footer'>
    <Plx parallaxData={footerPLX} className='footer-info'>
        <div className='footer-title'>Want to see how I made this site?</div>
        <div className="footer-repo-btn-container">
          <div className="footer-repo-btn">
            <a 
              href='https://github.com/mariapan0330/Personal-Website' 
              target='_blank'
              title='Opens a new tab'
              >View repository</a>
          </div>
        </div>
    </Plx>
    <div className="end-of-site"></div>
    </div>
    </>
  )
}

export default Footer;