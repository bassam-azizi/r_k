import React from 'react'
import { graphql } from 'gatsby'


import EpisodesBody from '../components/episodes/episodesBody'

import Layout from '../components/layout'
import Head from '../components/head'




const Emission = (data) =>{
	// const url = typeof window !== 'undefined' ? window.location.path : '/emission';
    return (
        <Layout>
      		<Head title="past emission"></Head>
            <EpisodesBody  data={data}/>
        </Layout>

    )
}

export default Emission

export const pageQuery = graphql`
        query($locale: String!){
            allStrapiEpisode(
				sort: { order: DESC, fields: [published_at] }
                limit: 1000
                filter: {
                    locale: { eq : $locale}
                }
			){
				edges{
					node{
						id
						slug
						title
						serie
						description
						picture{
							localFile{
								childImageSharp{
									gatsbyImageData(
										layout: CONSTRAINED
									)
								}
							}
						}
						
						author{
							name
						}
						published_at(formatString:"MM/D/YYYY")
					}
				}
			}
		}
    `