import React from 'react'
import Cta from './cta/cta'
import FeaturedNews from './news/featuredNews'
import ProgramBar from './programBar'
import Styled from '@emotion/styled'

const Wrapper = Styled.div`
    display: flex;
    flex-direction: column;
`
const Container = Styled.div`
    display: flex;
    margin-top: 64px;
    justify-content: flex-end;
`

const IndexBody = () => {
    return(
        <Wrapper>
            <Container>
                <Cta />
                <FeaturedNews />
            </Container>
            <ProgramBar />
        </Wrapper>
    )
}

export default IndexBody