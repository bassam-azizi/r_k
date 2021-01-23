import React, { useState } from 'react'

import Styled from '@emotion/styled'
import { GoTriangleRight } from 'react-icons/all'
import { IoMdPause } from 'react-icons/all'
import Liveplayer from './livePlayer'

const Wrapper = Styled.div`
    padding: 2rem;
    width: 390px;
    margin: auto;
`
const H1 = Styled.h1`
    line-height: 120px;
    font-size: 40px;
    font-weight: 300;
    color: #373737;

    span{
        color: #7F8A64;
        font-style: italic;
    }
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
const Icon = Styled(GoTriangleRight)`
    box-sizing: content-box;
    position: absolute;
    left: 1.9rem;
    top: 26.5%;
    font-size: 2.09rem;
    color: #fff;
    padding: 0 1.2rem 0 0;
`
const Pauseicon = Styled(IoMdPause)`
    box-sizing: content-box;
    position: absolute;
    left: 1.9rem;
    top: 26.5%;
    font-size: 1.70rem;
    color: #fff;
    padding: 0 1.2rem 0 0;
`
const P = Styled.p`
    font-size: 14px;
    line-height: 60px;
    color: #373737;
    font-weight: 200;
    text-align: left;
`


const Cta = () =>{
    const [cast, castOn] = useState(false)
    return(
        <Wrapper>
            <H1>We deliver <span>News</span></H1>
            <Button onClick={()=>castOn(!cast)} name="cta" types="button">{cast?<Pauseicon />:<Icon />}{cast? "Close Live Radio" : "Launch Live Radio" }</Button>
            <Liveplayer cast={cast}/>
            <P>13h-14h One Hour Sport with Fedi Arfaoui</P>
        </Wrapper>
    )
}

export default Cta