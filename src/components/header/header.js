import React, { useState } from "react"
import NavLinks from "./navLinks"
import Logo from "./logo"
import Lang from "./lang"
import Hamburger from '../../utils/hamburger'
import Hamburger_menu from "./hamburger_menu"
import { Wrapper, Container } from './headerStyle'
import { useIntl } from "gatsby-plugin-intl"




const Header = () => {
    const intl = useIntl();
    const [menuOpen, toggleMenu] = useState(false);
    const toggle = () => {
        toggleMenu(!menuOpen);
    }
    return (
        <Wrapper>
                <Container>
                    <Logo />
                    <NavLinks locale={intl.locale}/>
                    <Hamburger toggleMenu={toggle} />
                    <Hamburger_menu menu_open={menuOpen} toggleMenu={toggle} />
                    <Lang />
                </Container>
        </Wrapper>
    )
}

export default Header