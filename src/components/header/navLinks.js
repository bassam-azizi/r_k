import React from 'react'
import { FormattedMessage , Link} from "gatsby-plugin-intl";
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

const Navlink = Styled(Link)`
  font-family: ${({locale}) => (locale !=='ar' ? "Almarai" : 'Poppins')};
  direction: ${({locale}) => (locale !=='ar' ? "rtl" : "ltr")};
  font-size: ${({locale}) => (locale !=='ar' ? "18px" : "16px")};
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



const NavLinks = ({locale}) => {
    return (
        <Wrapper>
          <Navlink local={locale} to='/aboutUs' activeClassName="activeLink"><FormattedMessage id="aboutUs" defaultMessage="About us" /></Navlink>
          <Navlink local={locale} to="/program" activeClassName="activeLink"><FormattedMessage id="program" defaultMessage="Program" /></Navlink>
          <Navlink local={locale} to="/emission" activeClassName="activeLink"><FormattedMessage id="emission" defaultMessage="Emission" /></Navlink>
          <Navlink local={locale} to="/blog" activeClassName="activeLink"><FormattedMessage id="blog" defaultMessage="Blog" /></Navlink>
          <Navlink local={locale} to="/contact" activeClassName="activeLink"><FormattedMessage id="contact" defaultMessage="Contact" /> </Navlink>
        </Wrapper>
    )
}
export default NavLinks