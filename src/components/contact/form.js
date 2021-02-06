import React from 'react'
import {Wrapper, H1, Input_container, Input, Btn, Label, Textarea} from './formStyle'

const Form = () =>{
    return(
        <Wrapper>
                <H1>Send Us a Message</H1>
                <Input_container>
                    <Input name="name" id="name" type="text" required />
                    <Label htmlfor="name">Name</Label>
                </Input_container>
                <Input_container>
                    <Input name="email" id="email" type="email" required />
                    <Label htmlfor="email">email</Label>
                </Input_container>
                <Input_container>
                    <Textarea name="textarea" id="textarea" type="text" required />
                    <Label htmlfor="message">Message</Label>
                </Input_container>
                <Input_container>
                <Btn type="submit" id="btn" name="button" value="Submit"/>
                </Input_container>
        </Wrapper>
    )
}

export default Form 