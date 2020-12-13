import React from 'react'

import Styled from '@emotion/styled'

import { GoTriangleRight } from 'react-icons/all'



const Icon = Styled(GoTriangleRight)`
    box-sizing: content-box;
    position: absolute;
    left: 1.9rem;
    top: 26.5%;
    font-size: 2.09rem;
    color: #fff;
    padding: 0 1.2rem 0 0;
    
`

const Wrapper = Styled.div`
    padding: 2rem;
    width: 35vw;
    margin: auto;
`   
const H1 = Styled.h1`
    line-height: 120px;
    font-size: 40px;
    font-weight: 300;
    color: #373737;
`
const H1span = Styled.span`
    color: #7F8A64;
    font-style: italic;
`
const Button = Styled.button`
    width: 363px;
    height: 71px;
    background: #C52127;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0px 1px 4px 3px rgba(0, 0, 0, 0.25) ;
    color: #fff;
    cursor: pointer;
    line-height: 36px;
    font-weight: 600;
    font-size: 24px;
    position: relative;
`
const P = Styled.p`
    font-size: 14px;
    line-height: 60px;
    color: #373737;
    font-weight: 200;
    text-indent: 20px;
`



const Cta = () =>{
    return(
        <Wrapper>
        <H1>We deliver <H1span>News</H1span></H1>
        <Button name="cta" types="button"><Icon />Launch Live Radio</Button>
        <P>13h-14h One Hour Sport with Fedi Arfaoui</P>
        </Wrapper>
    )
}

export default Cta