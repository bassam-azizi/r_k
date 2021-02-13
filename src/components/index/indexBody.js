import React from 'react'
// import Cta from './cta/cta'
// import Posts_Collection from './posts/featuredPosts'
import ProgramBar from './programBar'
import Styled from '@emotion/styled'

const Wrapper = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`
const Container = Styled.div`
    display: flex;
    justify-content: flex-end;
`

const IndexBody = () => {
    return(
        <Wrapper>
            <Container>
                {/* <Cta />
                <Posts_Collection /> */}
            </Container>
            {/* <ProgramBar /> */}
        </Wrapper>
    )
}

export default IndexBody