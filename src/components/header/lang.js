import React, { useState } from 'react'
// import { Link } from "gatsby"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
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
        span{
            padding: .2rem .4rem;
            border: 1.1px solid #fff;
            cursor: pointer;
            background-color: #7F8A64aa;
            text-decoration: none;
            color: #fff;
            border-radius: 38%;


            :hover{
                color: #C52127;
                background-color: #7F8A64;
            }

        }
        `

const Lan = Styled.div`
            display: none;
            position: absolute;
            top: 10px;
            right: 20px;
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




const languageName = {
  en: "En",
  fr: "Fr",
  ar: "Ar",
}
const Lang = () => {
    const [openMenu, toggleMenu] = useState(false);
    const toggle_menu = () => {
        toggleMenu(!openMenu)
    }
    return ( 
        <>
            <LangWrapper >
                 <IntlContextConsumer>
                    {  ({ languages, language: currentLocale }) =>
                          languages.filter(language => (language!==currentLocale)).map(language => (
                            <span
                              key={language}
                              onClick={() => changeLocale(language)}
                            >
                                {languageName[language]}
                            </span>
                             ))
                    }
                  </IntlContextConsumer>
            </LangWrapper> 
            <Lan onClick={toggle_menu}><h3>En</h3></Lan>
            <Lang_menu menu_open = { openMenu } toggle = { toggle_menu }/> 
        </>
    )
}

export default Lang