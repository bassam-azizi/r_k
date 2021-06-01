import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import { useIntl } from "gatsby-plugin-intl"
import { Wrapper, Container } from './episodesBody_style'
import Episode from './episode'


const EpisodesBody = () =>{
	const data = useStaticQuery(graphql`
		query{
			enEpisodes : allStrapiEpisode(
				sort: { order: DESC, fields: [published_at] }
                limit: 1000
                filter: {
                    locale: { eq : "en"}
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
			frEpisodes : allStrapiEpisode(
				sort: { order: DESC, fields: [published_at] }
                limit: 1000
                filter: {
                    locale: { eq : "fr"}
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
			arEpisodes : allStrapiEpisode(
				sort: { order: DESC, fields: [published_at] }
                limit: 1000
                filter: {
                    locale: { eq : "ar"}
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
	`)
	const strapiEpisodes = (locale) =>{
            switch(locale){
                case("fr"):
                    return data.frEpisodes;
                case("ar"):
                    return data.arEpisodes;
                default:
                    return data.enEpisodes;
            }

        }
	return(
		<Wrapper>
			<Container>
				{strapiEpisodes(useIntl().locale).edges.map(edge=>
						<Episode data={edge} />
					)}
			</Container>
		</Wrapper>
		)
}

export default EpisodesBody