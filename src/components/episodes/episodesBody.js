import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import { Wrapper } from './episodesBody_style'
import Episode from './episode'


const Episodes_body = () =>{
	const data = useStaticQuery(graphql`
		query{
			allStrapiEpisode{
				edges{
					node{
						id
						slug
						title_en
						title_fr
						title_ar
						serie_en
						serie_fr
						serie_ar
						description_en
						description_fr
						description_ar
						picture{
							childImageSharp{
								fluid(maxWidth:700){
									...GatsbyImageSharpFluid
								}
							}
						}
						author{
							name
						}
						contributors_en
						contributors_ar
						published_at(formatString:"dd/mm/yyyy")
					}
				}
			}
			

		}
	`)
	return(
		<Wrapper>
			{data.allStrapiEpisode.edges.map(edge=>
					<Episode data={edge} />
				)}
		</Wrapper>
		)
}

export default Episodes_body