import React from 'react'
import { graphql } from 'gatsby'


import Layout from '../components/layout'
import Head from '../components/head'


import Bloga from '../components/blog/blogBody'

const Blog = (data) => {
    return (
        <Layout>
        	<Head title="Press" />

            <Bloga data={data}/>
        </Layout>
    )
}

export default Blog

export const pageQuery = graphql`
        query($locale: String!){
            allStrapiBlogpost(
                sort: { order: DESC, fields: [pubdate] }
                limit: 1000
                filter: {
                    locale: { eq : $locale}
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
    `