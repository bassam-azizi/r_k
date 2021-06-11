import React from 'react'
import Cta from './cta/cta'
import PostsCollection from './posts/featuredPosts'
import ProgramBar from './programBar'
import Styled from '@emotion/styled'
import { useIntl } from "gatsby-plugin-intl"


const Wrapper = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`
const Container = Styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    direction: ${props => props.locale === "ar"? "rtl" : "ltr"};

    @media (max-width: 1350px){
        grid-template-columns: repeat(11,1fr);
    }

    @media (max-width: 1108px) {
        grid-template-columns: 50px repeat(11, 1fr);
    }
    @media (max-width: 916px){
        grid-template-columns: 110px repeat(11, 1fr);
    }
    @media (max-width: 768px){
        grid-template-columns: 50px repeat(11, 1fr);
    }
`

const IndexBody = ({data}) => {
    return(
        <Wrapper >
            <Container locale={useIntl().locale}>
                <Cta />
                <PostsCollection data={data}/>
            </Container>
            <ProgramBar /> 
        </Wrapper>
    )
}

export default IndexBody