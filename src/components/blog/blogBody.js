import React from 'react'
import { graphql , useStaticQuery } from 'gatsby'
import { useIntl } from "gatsby-plugin-intl"



import Styled from '@emotion/styled'

import Blogpost from './blogPost'

const Wrapper = Styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    margin: 90px 0 101px;

    @media (max-width: 1100px){
            grid-template-columns: 50px repeat(12, 1fr) 50px;
    }
    @media (max-width: 916px){
        grid-template-columns: 110px repeat(12, 1fr) 110px;
    }
    @media (max-width: 857px){
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

    @media (max-width: 660px){
        grid-column: 3/-3;
    }
    @media (max-width: 550px){
        grid-column: 2/-2;
    }
`
    

const Bloga = () =>{
    const data = useStaticQuery(graphql`
        query{
            enPosts : allStrapiBlogpost(
                sort: { order: DESC, fields: [pubdate] }
                limit: 1000
                filter: {
                    locale: { eq : "en"}
                }
              ){
                edges{
                    node{
                        name
                        Slug
                        id
                        pubdate(formatString:"MM/D/YYYY")
                        featuredImg{
                            localFile{
                                childImageSharp{
                                    gatsbyImageData(
                                        layout: FULL_WIDTH
                                    )
                                }
                            }
                        }
                        body
                    }
                }
            }
            frPosts : allStrapiBlogpost(
                sort: { order: DESC, fields: [pubdate] }
                limit: 1000
                filter: {
                    locale: { eq : "fr"}
                }
              ){
                edges{
                    node{
                        name
                        Slug
                        id
                        pubdate(formatString:"MM/D/YYYY")
                        featuredImg{
                            localFile{
                                childImageSharp{
                                    gatsbyImageData(
                                        layout: FULL_WIDTH
                                    )
                                }
                            }
                        }
                        body
                    }
                }
            }
            arPosts : allStrapiBlogpost(
                sort: { order: DESC, fields: [pubdate] }
                limit: 1000
                filter: {
                    locale: { eq : "ar"}
                }
              ){
                edges{
                    node{
                        name
                        Slug
                        id
                        pubdate(formatString:"MM/D/YYYY")
                        featuredImg{
                            localFile{
                                childImageSharp{
                                    gatsbyImageData(
                                        layout: FULL_WIDTH
                                    )
                                }
                            }
                        }
                        body
                    }
                }
            }
        }
    `)
        const strapiBlogpost = (locale) =>{
            switch(locale){
                case("fr"):
                    return data.frPosts;
                case("ar"):
                    return data.arPosts;
                default:
                    return data.enPosts;
            }

        }
    return(
        <Wrapper>
            <Container>
                {strapiBlogpost(useIntl().locale).edges.map(edge => 
                    <Blogpost data={edge} />
                )}
            </Container>
        </Wrapper>
    )
}

export default Bloga