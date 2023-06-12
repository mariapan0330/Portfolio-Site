import React from 'react'
import '../styles/ContactMe.css'

const ContactMe: React.FC = () => {
    return (
			<>
			<div className="component" id='contactme'>
				<h1 className="arcade-theme-hero-text contact-hero-text">
          Contact Me
				</h1>
        <h2 className='resume-p'><a className="resume-link emphasis" href={require('../images/Maria Panagos Resume.pdf')} target='_blank'>View my resume</a></h2>

			{/* If you're looking for a versatile, passionate team member,
			let's connect! Together we can bring your ideas to life.*/}
			</div>
			</>
    )
}

export default ContactMe;