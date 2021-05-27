import React from 'react'
import {Wrapper, Lin} from './style_hamburger_menu'

const HamburgerMenu = props =>{
    return(
        <Wrapper menu={props.menu_open}>
            <span tabIndex={0} role="button" onClick={ () => props.toggleMenu() } onKeyDown={()=> props.toggleMenu()}>X</span>
            <Lin to="/aboutus">About us</Lin>
            <Lin to="/program">Program</Lin>
            <Lin to="/emission">Emission</Lin>
            <Lin to="/blog">Blog</Lin>
            <Lin to="/contact">Contact</Lin>
        </Wrapper>
    )
}

export default HamburgerMenu