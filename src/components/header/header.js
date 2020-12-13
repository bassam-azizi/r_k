import React, { useState } from "react"
import Styled from "@emotion/styled"
import NavLinks from "./navLinks"
import Logo from "./logo"
import Lang from "./lang"

const Navigation = Styled.nav`
  color: ##333;
  background: transparent;
  height: 14vh;
  display: flex;
  background-color: #fff;
  position: relative;
  justify-content: space-between;
  border-bottom: 2px solid #fff;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-self: bottom;
  padding-bottom: .7rem;

  @media (max-width: 768px) {
    position: sticky;
    //height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const Toggle = Styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = Styled.div`
  display: flex;
  height: 100%;
  //justify-content: flex-end;
  align-items: end;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = Styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`
const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navigation>
      <Logo />
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavLinks />
          <Lang />
        </Navbox>
      ) : (
        <Navbox open>
          <NavLinks />
          <Lang />
        </Navbox>
      )}
    </Navigation>
  )
}

export default Header