import React from 'react'

import Styled from '@emotion/styled'

import Form from './form'
import Info from './info'

const Wrapper = Styled.div`
    display: flex;
    flex-direction: row-reverse;
    border: 1px solid #000;
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