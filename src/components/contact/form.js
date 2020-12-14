import React from 'react'

import Styled from '@emotion/styled'



const Wrapper = Styled.form`
    padding: 2em;
    background-color: #E5E5E5 ;
    width: 50%;

`
const H1 = Styled.h1`
    color: #505D2E;
    font-size: 24px;
`
const Input_container = Styled.div`
    width: 75%;
    position: relative;
    margin: 45px auto -25px;
`
const Input = Styled.input`
    width: 100%;
    padding: 0.1rem;
`
const Btn = Styled.input`
    background-color: #C52127;
    border-radius: 10px;
    color: #fff;
    width: 100%;
    padding: 0.1rem;
    line-height: 3;
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
`
const Label = Styled.label`
    position: absolute;
    left: 7px;
    font-weight: 300;
    color: #444;
    font-size: 15px;
    top: 0.4rem;
`

const Textarea = Styled.textarea`
    overflow: hidden;
    width: 100%;
` 

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