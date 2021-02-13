import React from 'react'
import { Link } from 'gatsby'
import Styled from '@emotion/styled'

    const LangWrapper = Styled.div`
        display: flex;
        flex-direction: row;
        font-size: 14px;
        align-self: flex-end;
        margin-bottom: 19px;
        @media (max-width: 1188px){
            margin-bottom: 10px;
        }
        @media (max-width: 1078px){
            position: absolute;
            top: 0;
            right: 53px;
        }
        `
    
    const LangP = Styled(Link)`
        padding: .2rem .4rem;
        border: 1px solid #33333320;
        cursor: pointer;
        color: #fff;
        background-color: #7F8A64;
        &:nth-of-type(3){
            background: #C52127;
        }
        :hover{
            color: Gold;
        }
    `




const Lang = () =>{
    return(
        <LangWrapper>
            <LangP>AR</LangP>
            <LangP>FR</LangP>
            <LangP>EN</LangP>
        </LangWrapper>
    )
}

export default Lang