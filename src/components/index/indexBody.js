import React from 'react'
import Cta from './cta/cta'
import FeaturedNews from './news/featuredNews'
import Styled from '@emotion/styled'

const Wrapper = Styled.div`
    display: flex;
    margin: 0 -5vw;
    width: auto;
`

const IndexBody = () => {
    return(
        <Wrapper>
            <Cta />
            <FeaturedNews />
        </Wrapper>
    )
}

export default IndexBody