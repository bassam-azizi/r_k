import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import { Wrapper, Container } from './episodesBody_style'
import Episode from './episode'


const EpisodesBody = () =>{
	const data = useStaticQuery(graphql`
		query{
			allStrapiEpisode{
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
						published_at(formatString:"dd/mm/yyyy")
					}
				}
			}
			

		}
	`)
	return(
		<Wrapper>
			<Container>
				{data.allStrapiEpisode.edges.map(edge=>
						<Episode data={edge} />
					)}
			</Container>
		</Wrapper>
		)
}

export default EpisodesBody