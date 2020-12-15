import React from 'react'

import Styled from '@emotion/styled'

import Blogpost from './blogPost'

const Wrapper = Styled.div`
    margin: 0 10vw;
    display: flex;
    flex-wrap: wrap;
    font-family: Roboto;
    font-size: 15px;

`

const Bloga = () =>{
    return(
        <Wrapper>
            <Blogpost />
        </Wrapper>
    )
}

export default Bloga