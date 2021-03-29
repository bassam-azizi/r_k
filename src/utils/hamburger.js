import React from 'react'
import Styled from '@emotion/styled'


const Wrapper = Styled.div `
    display: none;
    cursor: pointer;
    margin-top: 28px;
    margin-left: 49px;
    z-index: 20;

    @media (max-width: 768px){
        display: block;
    }

`
const Bar = Styled.div `
    width: 45px;
    height: 4px;
    margin-bottom: 10px;
    background: #83826F ;
    border-radius: 7px;
`


const Hamburger = props => {
    return (
        <Wrapper onClick={()=>props.toggleMenu()} >
            <Bar></Bar>
            <Bar></Bar>
            <Bar></Bar>
        </Wrapper>
    )
}

export default Hamburger