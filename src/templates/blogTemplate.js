import React from 'react'
import Reactmarkdown from "react-markdown"
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Wrapper } from './blogTemplate_style'
import ShareBlog from './shareBlog'
import Head from "../components/head"


import Layout from '../components/layout'


const BlogTemplate = ({ data }) => {
    // const img = process.env.PUBLIC_URL + data.strapiBlogpost.featuredImg.childImageSharp.resize.src;
    let image = getImage(data.strapiBlogpost.featuredImg.localFile) ;
    console.log(data.strapiBlogpost.body);
    return (
        <Layout>
            <Head title={data.strapiBlogpost.name} image={image} path={data.site.siteMetadata.blogUrl}/>
            <Head title={data.strapiBlogpost.name} path={data.site.siteMetadata.blogUrl}/>
            <Wrapper>
                <div className="container">
                    <div className='header'>
                        <h1>{data.strapiBlogpost.name}</h1>
                        <p className="pubdate">{data.strapiBlogpost.pubdate}</p>
                    </div>
                    <div className="body">
                        <GatsbyImage image={image} alt={data.strapiBlogpost.name} />
                        <Reactmarkdown children={data.strapiBlogpost.body} />
                    </div>
                </div>
                <ShareBlog title={data.strapiBlogpost.name} img={image}/>
            </Wrapper>
        </Layout>
    )
}

export default BlogTemplate


export const pageQuery = graphql`
        query ($slug:String!) {
            strapiBlogpost( Slug : { eq: $slug}){
                name
                pubdate(formatString:"MMMM Do, YYYY")
                body
                categories{
                    name
                }
                featuredImg{
                    localFile{
                        childImageSharp{
                            gatsbyImageData(
                                layout: FULL_WIDTH
                            )
                        }
                    }
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