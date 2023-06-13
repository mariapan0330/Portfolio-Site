import React, { useState, useEffect } from 'react'
import '../styles/ContactMe.css'

// TODO: not a huge fan of this page, feels like it can be way optimized
const ContactMe: React.FC = () => {
    const [name, setName] = useState<string>('')
    const [nameError, setNameError] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('')
    const [emailError, setEmailError] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')
    const [messageError, setMessageError] = useState<boolean>(false)
    const [displayError, setDisplayError] = useState<boolean>(false)

    useEffect(() => {
      setName(name)
      setEmail(email)
      setMessage(message)
    }, [name, email, message, nameError, emailError, messageError])

    useEffect(() => {
      setDisplayError(nameError || emailError || messageError)
    }, [nameError, emailError, messageError])

    // todo: find parameter type of 'e'
    const handleContactSubmit = (e:any) => {
      e.preventDefault()
      
      setNameError(name.length === 0)
      setEmailError(email.length === 0)
      setMessageError(message.length === 0)

      if (name && email && message){
        console.log("submitted:", name, email, message)
        setName('')
        setEmail('')
        setMessage('')

        setNameError(false)
        setEmailError(false)
        setMessageError(false)
      } else {
        console.log('missing a field')
        setDisplayError(true)
      }
        
    }


    return (
			<>
			<div id='contactme'>
				<h1 className="arcade-theme-hero-text contact-hero-text">
          Contact Me
				</h1>
        <h2 className='resume-p'><a className="resume-link emphasis" href={require('../images/Maria Panagos Resume.pdf')} target='_blank'>View my resume</a></h2>
        <div className='contact-form-flex'>
          <div className='empty-col' />
          <form className='contact-form'>
            <h1 className='contact-form-title'>Drop a message!</h1>
            <input 
              name='name' 
              value={name} 
              onChange={(e)=> setName(e.target.value)} 
              placeholder='* Name' 
              className=
              {`contact-item ${nameError? 'error':''}`} 
              />
            <input 
              name='email' 
              value={email} 
              onChange={(e)=> setEmail(e.target.value)} 
              placeholder='* Email' 
              className=
              {`contact-item ${emailError? 'error':''}`}
              />
            <input 
              name='message' 
              value={message} 
              onChange={(e)=>{
                setMessageError(message.length === 0)
                setMessage(e.target.value)
              }} 
              placeholder='* Message' 
              className=
              {`contact-item ${messageError? 'error':''}`} 
              />
            {displayError && 
            <h1 className='contact-form-error'>Please fill out all the fields</h1>
            }
            <button className='contact-item contact-submit-btn' onClick={(e)=>{handleContactSubmit(e)}}>Submit</button>
          </form>
          <div className="empty-col" />
        </div>

			{/* If you're looking for a versatile, passionate team member,
			let's connect! Together we can bring your ideas to life.*/}
			</div>
			</>
    )
}

export default ContactMe;