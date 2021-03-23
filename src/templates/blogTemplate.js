import React from 'react'
import Reactmarkdown from "react-markdown"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Wrapper } from './styleBlogTemplate'
import Share_Blog from './shareBlog'
import Head from "../components/head"


import Layout from '../components/layout'


const Blog_template = ({ data }) => {
    const img = process.env.PUBLIC_URL + data.strapiBlogpost.featuredImg.childImageSharp.resize.src;
    return (
        <Layout>
            <Head title={data.strapiBlogpost.name} image={img} path={data.site.siteMetadata.blogUrl}/>
            <Wrapper>
                <div className="container">
                    <div className='header'>
                        <h1>{data.strapiBlogpost.name}</h1>
                        <p className="pubdate">{data.strapiBlogpost.pubdate}</p>
                    </div>
                    <div className="body">
                        <Img className='blogImg' fluid={data.strapiBlogpost.featuredImg.childImageSharp.fluid} alt='blog title' />
                        <Reactmarkdown source={data.strapiBlogpost.body} />
                    </div>
                </div>
                <Share_Blog title={data.strapiBlogpost.name} img={data.strapiBlogpost.featuredImg.childImageSharp.fluid}/>
            </Wrapper>
        </Layout>
    )
}

export default Blog_template


export const pageQuery = graphql `
        query ($slug:String!) {
            strapiBlogpost( Slug : { eq: $slug}){
                name
                pubdate(formatString:"MMMM Do, YYYY")
                body
                categories{
                    name
                }
                featuredImg{
                            childImageSharp{
                                fluid(maxWidth: 764){
                                    ...GatsbyImageSharpFluid
                                }
                                resize(width:900, quality:90){
                                    src
                                }
                            }
                            publicURL
                        }
            }
            site{
                siteMetadata{
                    blogUrl
                    url
                }
            }
        }
`