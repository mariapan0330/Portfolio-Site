import React, { useState, useEffect } from 'react'
import ContactInput from './ContactInput'
import '../styles/ContactMe.css'

interface FormValues {
  username: string;
  email: string;
  message: string;
}

// TODO: not a huge fan of this page, feels like it can be way optimized
// loosely following https://www.youtube.com/watch?v=tIdNeoHniEY
const ContactMe: React.FC = () => {

    const [formValues, setFormValues] = useState<FormValues>({
      username:'',
      email:'',
      message:'',
    })
    const [hasSubmitted, setHasSubmitted] = useState<boolean>(false)

    const handleSubmit = (e:any) => {
      e.preventDefault();
      setHasSubmitted(true)
      console.log("submitted:", formValues['username'], formValues['email'], formValues['message'],)

      // reset form fields
      // setFormValues({ username: '', email: '', message: '' })
    }

    const onChange = (e:any) => {
      // spreads out the form values, & for each value look up the targeted name and assign it to the targeted val
      setFormValues({...formValues, [e.target.name]: e.target.value})
    }


    return (
			<>
			<div id='contactme'>
				<h1 className="arcade-theme-hero-text contact-hero-text">
          Contact Me
				</h1>
        <h2 className='resume-p'>
          <a 
          className="resume-link emphasis" 
          href={require('../images/Maria Panagos Resume.pdf')} 
          target='_blank'
          title='Opens a new tab'
          >View my resume</a>
        </h2>
        <div className='contact-form-flex'>
          <div className='empty-col' />
          { hasSubmitted ? 
            <div className="contact-form">
              <h1 className='contact-form-thank-you'>
                Thank you, {`${formValues['username']}`}! 
                <p>Your message has been submitted. <br/>
                I usually respond within 1-2 business days.</p>
                </h1>
            </div>
              :
            <form className='contact-form' onSubmit={e=>handleSubmit(e)}>
              <h1 className='contact-form-title'>Drop a message!</h1>
              <p className='contact-form-subtitle'>
                The following message will be emailed to me.
                <br/>
                You can also email me directly at maria.pan0330@gmail.com.
                <br/>
                I usually respond within 1-2 business days!
              </p>
              {/* breaking inputs into ContactInput components */}
              <ContactInput 
                isArea={false}
                name='username' 
                type='text'
                errorMsg='Please provide your name.'
                placeholder='* Name' 
                value={formValues['username']}
                // value={username} 
                onChange={onChange} />
              <ContactInput 
                isArea={false}
                name='email' 
                type='email'
                errorMsg='Please provide a valid email address.' 
                placeholder='* Email' 
                value={formValues['email']}
                // value={email} 
                onChange={onChange} />
              <ContactInput 
                isArea={true}
                name='message'
                type='textarea'
                errorMsg='Please enter your message.' 
                placeholder='* Message' 
                value={formValues['message']}
                // value={message} 
                onChange={onChange} />
              <button className='contact-item contact-submit-btn'>Submit</button>
          </form>
          }
          <div className="empty-col" />
        </div>

			{/* If you're looking for a versatile, passionate team member,
			let's connect! Together we can bring your ideas to life.*/}
			</div>
			</>
    )
}

export default ContactMe;