import React, { useState } from 'react'
import { Link } from 'gatsby'
import Styled from '@emotion/styled'
import Lang_menu from './lang_menu'

    const LangWrapper = Styled.div`
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

        }

        .balls{
            width: 100%;
            position: absolute;
            bottom: 0;
            top: 0;
            display: block;
            display: none   ;
            text-align: center;
            height: auto;
            z-index: 10;

            @media (max-width: 768px){
                display: block;
            }
        }
        .ball{
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: #222;
            margin: 32px 8px 0 0; 
            display: inline-block;;
        }
        `
    
    const LangP = Styled(Link)`
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




const Lang = () =>{
    const [openMenu, toggleMenu] = useState(false);
    const toggle_menu = () =>{
        toggleMenu(!openMenu)
    }
    return(
        <>
            <LangWrapper>
                <LangP to="/">AR</LangP>
                <LangP to="/">FR</LangP>
                <LangP to="/">EN</LangP>
                <div className="balls" onClick={toggle_menu}>
                    <div className="ball"></div>
                    <div className="ball"></div>
                    <div className="ball"></div>
                </div>
            </LangWrapper>
            <Lang_menu menu_open={openMenu} toggle={toggle_menu}/>
        </>
    )
}

export default Lang