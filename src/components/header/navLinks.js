import React from 'react'
import {Link} from 'gatsby'
import Styled from '@emotion/styled'


const Wrapper = Styled.div`
  align-self: flex-end;
  padding: 0 0 22px;
  letter-spacing: 0.2px;
  @media (max-width: 1188px){
    padding: 0 0 10px;
    letter-spacing: 0;
    padding: 0;
  }
  @media (max-width: 768px){
    display: none;
  }
`
const NavItem = Styled(Link)`
  font-family: 'Poppins';
  font-size: 16px;
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 35px;
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
    background: #7F8A64;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #7F8A64;
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
        <Wrapper>
          <NavItem to='/aboutUs'>About us</NavItem>
          <NavItem to="/program">Program</NavItem>
          <NavItem to="/emission">Emission</NavItem>
          <NavItem to="/blog">Blog</NavItem>
          <NavItem to="/contact">Contact </NavItem>
        </Wrapper>
    )
}
export default NavLinks