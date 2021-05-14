import React from 'react'
import { graphql , useStaticQuery } from 'gatsby'


import Styled from '@emotion/styled'

import Blogpost from './blogPost'

const Wrapper = Styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    margin: 71px 0 101px;

    @media (max-width: 1100px){
            grid-template-columns: 50px repeat(12, 1fr) 50px;
    }
    @media (max-width: 916px){
        grid-template-columns: 110px repeat(12, 1fr) 110px;
    }
    @media (max-width: 768px){
        grid-template-columns: 50px repeat(12, 1fr) 50px;
    }
    @media(max-width: 420px){
        grid-template-columns: repeat(12,1fr);
    }
`
const Container = Styled.div`
    grid-column: 2/-2;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 35px;
`
    

const Bloga = () =>{
    const data = useStaticQuery(graphql`
        query{
            allStrapiBlogpost(
                sort: { order: DESC, fields: [pubdate] }
                limit: 1000
              ){
                edges{
                    node{
                        name
                        Slug
                        id
                        pubdate
                        featuredImg{
                            childImageSharp{
                                fluid(maxWidth: 650){
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        body
                    }
                }
            }
        }
    `)
    return(
        <Wrapper>
            <Container>
                {data.allStrapiBlogpost.edges.map(edge => 
                    <Blogpost data={edge} />
                )}
            </Container>
        </Wrapper>
    )
}

export default Bloga