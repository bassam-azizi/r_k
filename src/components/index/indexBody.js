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
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    // display: flex;
    // // margin-top: 64px;
    // justify-content: flex-end;

    @media (max-width: 1350px){
        grid-template-columns: repeat(11,1fr);
    }

    @media (max-width: 1108px) {
        grid-template-columns: 50px repeat(11, 1fr);
        // flex-direction: column;
        // justify-content: center;
    }
    @media (max-width: 916px){
        grid-template-columns: 110px repeat(11, 1fr);
    }
    @media (max-width: 768px){
        grid-template-columns: 50px repeat(11, 1fr);
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