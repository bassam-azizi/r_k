import React from 'react'

import Styled from '@emotion/styled'

import Form from './form'
import Info from './info'

const Wrapper = Styled.div`
    display: flex;
    flex-direction: row-reverse;
    width: 80%;
    margin: 115px auto;

    @media (max-width: 1232px){
        width: 90%;
    }

    @media (max-width: 900px){
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        margin-top: 170px;
    }
`


const Contact_Body = () =>{
    return(
        <Wrapper>
            <Info />
            <Form />
        </Wrapper>

    )
}

export default Contact_Body