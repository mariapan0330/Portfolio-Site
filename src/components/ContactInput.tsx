import React, { useState } from 'react'
import '../styles/ContactMe.css'

interface ContactInputProps {
    isArea: boolean;
    name: string;
    type: string;
    errorMsg: string;
    value: string;
    onChange: any;
    placeholder: string;
    // value: string;
    // setFormValues: React.Dispatch<React.SetStateAction<object>>;
    // setName: React.Dispatch<React.SetStateAction<string>>;
}

const ContactInput:React.FC<ContactInputProps> = ({ isArea, name, type, errorMsg, value, onChange, placeholder }) => {
    const [notFocused, setNotFocused] = useState<boolean>(false)
    const InputComponent = isArea ? 'textarea' : 'input' // changes the html component to a textarea or input

    const handleFocus = (e:any) => {
        setNotFocused(true)
        console.log('you left')
    }
    
    return (
        <div id='contact-inp'>
            <InputComponent 
                name={name}
                rows={7}
                type={type}
                value={value}
                placeholder={placeholder}
                className={`contact-item contact-textarea ${notFocused? 'not-focused':''}`}
                required
                onChange={e=>{onChange(e)}}
                
                // TODO: if you enter this field and leave it without entering valid information, toggle the 
                onBlur={handleFocus}
                />
            <span className='contact-form-error'>{errorMsg}</span>
        </div>
    )
}


export default ContactInput;