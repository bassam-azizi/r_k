import React from 'react'
import {Link} from 'gatsby'
import Styled from '@emotion/styled'


const NavItem = Styled(Link)`
  font-family: 'Poppins';
  font-size: 15px;
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: goldenrod;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: goldenrod;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`



const NavLinks = () =>{
    return(
        <>
        <NavItem to='/aboutUs'>About us</NavItem>
        <NavItem to="/program">Program</NavItem>
        <NavItem to="/emission">Emission</NavItem>
        <NavItem to="/contact">Contact </NavItem>
        </>
    )
}
export default NavLinks