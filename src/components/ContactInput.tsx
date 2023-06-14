import React from 'react'

interface contactInputProps {
    placeholder: string;
}

const ContactInput:React.FC<contactInputProps> = ({ placeholder }) => {
  return (
    <div id='contact-inp'>
        <input 
              name='name' 
            //   value={name} 
            //   onChange={(e)=> setName(e.target.value)} 
              placeholder={placeholder}
            //   className= {`contact-item ${nameError? 'error':''}`} 
              />
    </div>
  )
}


export default ContactInput;