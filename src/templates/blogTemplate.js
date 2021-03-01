import React from 'react'
import Reactmarkdown from "react-markdown"
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import {Wrapper} from './styleBlogTemplate'


import Layout from '../components/layout'


const Blog_template = ({data}) =>{
    return(
        <Layout>
            <Wrapper>
                <Link className='shareBtn' to='/'>Share</Link>
                <div className='header'>
                    <h1>{data.strapiBlogpost.name}</h1>
                    <p className="pubdate">{data.strapiBlogpost.pubdate}</p>
                </div>
                <div className="body">
                    <Img className='blogImg' fluid={data.strapiBlogpost.featuredImg.childImageSharp.fluid} alt='blog title' />
                    <Reactmarkdown source={data.strapiBlogpost.body} />
                </div>
            </Wrapper>
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
                featuredImg{
                            childImageSharp{
                                fluid(maxWidth: 764){
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
            }
        }
`
