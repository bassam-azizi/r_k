import React from 'react'
import Reactmarkdown from "react-markdown"
import { graphql } from 'gatsby'
import Styled from '@emotion/styled'

import Layout from '../components/layout'



const Container = Styled.div`
    padding: 0 2rem;
    cursor: pointer;
`
const Header = Styled.div`
    padding: 2rem 0;
    // text-align: center;
    padding: 0 3rem 3rem;
    & > p{
        font-size: 12px;
        color: #888;
    }
`
const Body = Styled.div`
    color: #444;
    & > p{
        line-height: 60px;
        // color: #888;
        font-weight: 500;
        padding: 0 3rem;
        font-size: 17px;
    }
`

const Blog_template = ({data}) =>{
    return(
        <Layout>
            <Container>
                <Header>
                    <h1>{data.strapiBlogpost.name}</h1>
                    <p>{data.strapiBlogpost.pubdate}</p>
                </Header>
                <Body>
                    <Reactmarkdown source={data.strapiBlogpost.body} />
                </Body>
            </Container>
        </Layout>
    )
}

export default Blog_template


export const pageQuery = graphql`
        query ($slug:String!) {
            strapiBlogpost( Slug : { eq: $slug}){
                name
                pubdate(formatString:"MMMM Do, YYYY")
                body
                categories{
                    name
                }
            }
        }
`
