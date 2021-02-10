import React from 'react'
import Styled from '@emotion/styled'


const Wrapper = Styled.div`
    display: block;
    cursor: pointer;
`
const Bar = Styled.div`
    width: 45px;
    height: 4px;
    margin-bottom: 10px;
    background: #000 ;
    border-radius: 22%;
`



const Hamburger = () => {
    return(
        <Wrapper>
            <Bar></Bar>
            <Bar></Bar>
            <Bar></Bar>
        </Wrapper>
    )
}

export default Hamburger