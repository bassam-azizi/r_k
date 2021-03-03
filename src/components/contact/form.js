import React from 'react'
import { Wrapper } from './formStyle'

const Form = () =>{
    return(
        <Wrapper>
                <h1 className="header">Send Us a Message</h1>
                <div className="input_container">
                    <input name="name" id="name" type="text" required />
                    <label htmlfor="name">Name</label>
                </div>
                <div className="input_container">

                    <input name="email" id="email" type="email" required />
                    <label htmlfor="email">Email</label>
                </div>
                <div className="msg input_container">
                    <textarea name="textarea" id="textarea" type="text" required />
                    <label htmlfor="message">Message</label>
                </div>
                <div className="input_container">
                    <input className='btn' type="submit" id="btn" name="button" value="Submit"/>
                </div>
        </Wrapper>
    )
}

export default Form 