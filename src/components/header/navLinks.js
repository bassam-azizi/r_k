import React from 'react'
import { Link } from 'gatsby'
import Styled from '@emotion/styled'


const Wrapper = Styled.div `
  align-self: flex-end;
  padding: 0 0 10px;
  letter-spacing: 0.2px;

  .activeLink{
    color: #333915;

    :after {
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    width: 100%;
    content: ".";
    color: #7F8A64;
    background: #7F8A64;
    height: 1.5px;
    transition: all 0.4s ease-in;
  }
  }

  @media (max-width: 1188px){
    letter-spacing: 0;
    padding: 0;
    margin-bottom: 10px;
  }
  @media (max-width: 1079px) {
    margin-bottom: 0;
  }
  @media (max-width: 916px){
    margin-top: 30px;
    align-self: center;
  }
  @media (max-width: 768px){
    display: none;
  }
`
const NavItem = Styled(Link)
`
  font-family: 'Poppins';
  font-size: 16px;
  text-decoration: none;
  color: #555;
  display: inline-block;
  white-space: nowrap;
  margin: 0 35px;
  transition: all 200ms ease-in;
  position: relative;
  
  :after {
    position: absolute;
    bottom: -3px;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #7F8A64;
    height: 1.5px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #7F8A64;
    ::after {
      width: 100%;
    }
  }

  :active {
    color: #444;
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



const NavLinks = () => {
    return (
        <Wrapper>
          <NavItem to='/aboutUs' activeClassName="activeLink">About us</NavItem>
          <NavItem to="/program" activeClassName="activeLink">Program</NavItem>
          <NavItem to="/emission" activeClassName="activeLink">Emission</NavItem>
          <NavItem to="/blog" activeClassName="activeLink">Blog</NavItem>
          <NavItem to="/contact" activeClassName="activeLink">Contact </NavItem>
        </Wrapper>
    )
}
export default NavLinks