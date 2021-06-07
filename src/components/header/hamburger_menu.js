import React from 'react'
import { FormattedMessage , Link} from "gatsby-plugin-intl";
import Styled from '@emotion/styled'




const Wrapper = Styled.div `
    position: relative;
    background-color: rgb(128, 138, 102);
    color: #fff;
    padding: 51px 0 0;
    z-index: 20;

    position: absolute;
    top: 150px;
    left: ${ (props) => ( props.menu ? '0' : '-100%' )};
    transition: all 1s linear;


    span{
        position: absolute;
        top: 15px;
        right: 21px;
        color: #fff;
        font-size: 26px;
        font-family: sans-serif;
        display: block;
        cursor: pointer;
        :hover{
            color: #8B656D ;
            // color: #c52127 ;
        }     
    }

    `
const Lin = Styled(Link)
`
        display: block;
        width: 236px;
        padding: 27px 0 27px 39px;
        font-size: 24px;
        color: #fff;
        text-align: left;
        text-decoration: none;
        cursor: pointer;
        border-bottom: 1px solid #cfcfcf12 ;

        :hover{
            opacity: .7;
            background: #2E3224;
            color: #fff;
        }

    }

`

const HamburgerMenu = props =>{
    return(
        <Wrapper menu={props.menu_open}>
            <span tabIndex={0} role="button" onClick={ () => props.toggleMenu() } onKeyDown={()=> props.toggleMenu()}>X</span>
            <Lin to="/aboutUs"><FormattedMessage id="aboutUs" defaultMessage="About us" /></Lin>
            <Lin to="/program"><FormattedMessage id="program" defaultMessage="Program" /></Lin>
            <Lin to="/emission"><FormattedMessage id="emission" defaultMessage="Emission" /></Lin>
            <Lin to="/blog"><FormattedMessage id="blog" defaultMessage="Blog" /></Lin>
            <Lin to="/contact"><FormattedMessage id="contact" defaultMessage="Contact" /></Lin>
        </Wrapper>
    )
}

export default HamburgerMenu