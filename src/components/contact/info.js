import React from 'react'

import Styled from '@emotion/styled'


const Wrapper = Styled.div`
    padding: 1.5em;
    background: #373737;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    display: flex;
    flex-direction: column;
    min-height: 100%;
`
const Adress = Styled.div`
    color: f1f1f1;
    flex-grow: 1;
`
const H1 = Styled.h1`
    font-weight: 600;
`
const Sponsored = Styled.div`
    font-style: italic;
    margin-bottom: 2px; 
    `



const Info = () =>{
    return(
        <Wrapper>
            <Adress>
                <H1>Radio Web Khemir</H1>
                <p>Radio Web Khmir _Maison des jeunes _Ain Draham_8730</p>
                <p>Tel:  00216 41 425 865</p>
                <p>Fax: 00216 71 428 965</p>
            </Adress>
            <Sponsored>
            <p>Fondeé par L’association</p>
            <p>Femme Pour Developpment AFPD</p>
            <p>Financeé par le GIZ</p>
            </Sponsored>
            </Wrapper>
    )
}

export default Info