import React from 'react'
import Cta from './cta/cta'
import Posts_Collection from './posts/featuredPosts'
import ProgramBar from './programBar'
import Styled from '@emotion/styled'

const Wrapper = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`
const Container = Styled.div`
    display: flex;
    // margin-top: 64px;
    justify-content: flex-end;

    @media (max-width: 1028px) {
        flex-direction: column;
        justify-content: center;
    }
`

const IndexBody = () => {
    return(
        <Wrapper>
            <Container>
                <Cta />
                <Posts_Collection />
            </Container>
            <ProgramBar /> 
        </Wrapper>
    )
}

export default IndexBody