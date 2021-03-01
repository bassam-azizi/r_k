import React from 'react'
import { graphql , useStaticQuery } from 'gatsby'


import Styled from '@emotion/styled'

import Blogpost from './blogPost'

const Wrapper = Styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 90%;
    max-width: 1250px;
    margin: 71px auto 101px;

    @media (max-width:1194px){
    	justify-content: center;
    }

    @media (max-width:858px){
    	width: 96%;
    }
    @media (max-width: 350px){
    	width: 100%;
    }
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
                                fixed(width: 464){
                                    ...GatsbyImageSharpFixed
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
            {data.allStrapiBlogpost.edges.map(edge => 
                <Blogpost data={edge} />
            )}
        </Wrapper>
    )
}

export default Bloga