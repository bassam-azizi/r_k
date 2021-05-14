import React from 'react'
import Styled from '@emotion/styled'


const Wrapper = Styled.div `
    display: none;
    cursor: pointer;
    margin-top: 28px;
    // margin-left: 40px;
    z-index: 20;

    @media (max-width: 768px){
        display: block;
    }
    // @media (max-width: 370px){
    //     margin-left: 28px;
    // }

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