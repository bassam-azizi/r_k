import React from 'react'
import Styled from '@emotion/styled'


const Wrapper = Styled.div`
    display: none;
    cursor: pointer;
    margin-top: 58px;
    margin-left: 49px;

    @media (max-width: 768px){
        display: block;
    }

`
const Bar = Styled.div`
    width: 45px;
    height: 4px;
    margin-bottom: 10px;
    background: #000 ;
    border-radius: 22%;
`


const Hamburger = props => {
    return(
        <Wrapper onClick={()=>props.toggleMenu()} >
            <Bar></Bar>
            <Bar></Bar>
            <Bar></Bar>
        </Wrapper>
    )
}

export default Hamburger