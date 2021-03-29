import React, { useState } from 'react'
import { Link } from 'gatsby'
import Styled from '@emotion/styled'
import Lang_menu from './lang_menu'

const LangWrapper = Styled.div `
        display: flex;
        flex-direction: row;
        font-size: 14px;
        align-self: flex-end;
        margin-bottom: 9px;



        @media (max-width: 1188px){
            margin-bottom: 10px;
        }
        @media (max-width: 1078px){
            position: absolute;
            top: 0;
            right: 53px;
        }
        @media (max-width: 916px){
            bottom: 0;
            top: auto;
            cursor: pointer;
        }

        @media (max-width: 768px){
            padding: 0 0 17px;
            top: 0;
            bottom: auto;
            right: 4px;
            display: none;

        }
        `

const Lan = Styled.div`
            position: absolute;
            top: 10px;
            right: 20px;
            display: none;
            padding: 5px;
            color: #7C658B;
            font-size: 14px;
            cursor: pointer;

            ::after{
                content:"";
                display: block;
                width: 10px;
                height: 1px;
                background: #8A6D63;
            }

            @media (max-width: 768px){
                display: block;
            }
        `

const LangP = Styled(Link)
`
        padding: .2rem .4rem;
        border: 1px solid #33333320;
        cursor: pointer;
        color: #fff;
        background-color: #7F8A64;
        text-decoration: none;
        color: #fff;
        &:nth-of-type(3){
            background: #C52127;
        }
        :hover{
            color: Gold;
        }
    `




const Lang = () => {
    const [openMenu, toggleMenu] = useState(false);
    const toggle_menu = () => {
        toggleMenu(!openMenu)
    }
    return ( 
        <>
            <LangWrapper >
                <LangP to="/">AR</LangP>
                <LangP to="/">FR</LangP>
                <LangP to="/">EN</LangP>
            </LangWrapper> 
            <Lan onClick={toggle_menu}><h3>En</h3></Lan>
            <Lang_menu menu_open = { openMenu } toggle = { toggle_menu }/> 
        </>
    )
}

export default Lang