import React from 'react'
import {Wrapper, Close, Lin} from './style_hamburger_menu'

const Hamburger_menu = () =>{
    return(
        <Wrapper>
            <Close>X</Close>
            <Lin>About us</Lin>
            <Lin>Program</Lin>
            <Lin>Emission</Lin>
            <Lin>Blog</Lin>
            <Lin>Contact</Lin>
        </Wrapper>
    )
}

export default Hamburger_menu