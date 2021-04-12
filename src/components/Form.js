import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        
        console.log('Form submitted')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} />
            <input type="text" value={email} />
            <textarea name="message" value={message} />
            <input type="submit" value="Submit" onClick={handleSubmit} />            
        </form>
    )
}

export default Form
