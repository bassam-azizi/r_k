import React from 'react'
import Cta from './cta/cta'
import FeaturedNews from './featuredNews'
import Styled from '@emotion/styled'

const Wrapper = Styled.div`
    display: flex;
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