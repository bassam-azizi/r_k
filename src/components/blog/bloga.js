import React from 'react'
import { graphql , useStaticQuery } from 'gatsby'


import Styled from '@emotion/styled'

import Blogpost from './blogPost'

const Wrapper = Styled.div`
    margin: 0 10vw;
    display: flex;
    flex-wrap: wrap;
    font-family: Roboto;
    font-size: 15px;
    margin: -138px 0 0 -138px;
    width: calc(100% + 138px);
`

const Bloga = () =>{
    const data = useStaticQuery(graphql`
        query{
            allStrapiBlogpost{
                edges{
                    node{
                        name
                        Slug
                        id
                        pubdate
                        featuredImg{
                            childImageSharp{
                                fixed(width: 300, height: 250){
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