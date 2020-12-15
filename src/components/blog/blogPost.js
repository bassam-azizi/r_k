import React from 'react'

import Styled from '@emotion/styled'

const Wrapper = Styled.div`
    padding: 0;
    border: .5px solid #cfcfcf;
    width: 319px;
    height: 252px;
`
const Picture = Styled.picture`
    width: 100%;
    margin: 0;
    height: auto;
`
const Title = Styled.div`
    width: 100%;
    height: 73px;
    position: absolute:
    left: 0;
    bottom: 0;
    padding: 4px 1px;
    text-align: center;
    border-top: .5px solid #cfcfcf;
`


const Blogpost = () =>{
    return(
        <Wrapper>
            <Picture>
                <img src="../../images/logo.png" alt="" />
            </Picture>
            <Title>
                <h1>hallo</h1>
                <p>this is lorem*14</p>
            </Title>
        </Wrapper>
    )
}

export default Blogpost