import React from "react"
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

import IndexBody from '../components/index/indexBody'


const Home = (data) =>{
  return(
    <Layout>
        <Head title="Home" />
      	<IndexBody data={data}/>
    </Layout>
  )
}
export default Home

export const pageQuery = graphql`
        query($locale: String!){
            allStrapiBlogpost(
                sort: { order: DESC, fields: [pubdate] }
                limit: 4
                filter: {
                    locale: { eq : $locale}
                }
            ){
                edges{
                    node{
                        name
                        Slug
                        id
                        pubdate(formatString:"MMMM Do, YYYY")
                        featuredImg{
                            localFile{
                                childImageSharp{
                                    gatsbyImageData(
                                        layout: FULL_WIDTH
                                        placeholder: BLURRED
                                        formats: [AUTO, WEBP, AVIF]
                                    )
                                }
                            }
                        }
                        body
                    }
                }
            }
            }
    `
