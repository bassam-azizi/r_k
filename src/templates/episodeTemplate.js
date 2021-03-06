import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Reactmarkdown from "react-markdown"
import { Wrapper } from './episodeTemplate_style'
import Podcast from '../utils/podcast/podcastPlayer'

import Layout from '../components/layout'


const EpisodeTemplate = ({data}) =>{
	let image =getImage(data.strapiEpisode.picture.localFile) ;
	let authorImage = getImage(data.strapiEpisode.author.picture.localFile) ;
	return(
		<Layout>
			<Wrapper>
				<div className="image">
					<GatsbyImage image={image} alt={data.strapiEpisode.title} />
				</div>
				<div className="header">
					<div className="info_one">
						<h1>{data.strapiEpisode.title}</h1>
						{/*<p>{data.strapiEpisode.author.name}</p>*/}
					</div>
					<div className="info_two">
						<h1>{data.strapiEpisode.serie}</h1>
						<p>{data.strapiEpisode.published_at}</p>
					</div>
				</div>
				<div className="podcast">
					<Podcast data={data.podcastRssFeedEpisode} />
				</div>
				<div className="description">
					<Reactmarkdown children={data.strapiEpisode.description} />
				</div>
				<div className="author-section">
					<GatsbyImage image={authorImage} alt={data.strapiEpisode.author.name}/>
					<h4>{data.strapiEpisode.author.name}</h4>
				</div>
			</Wrapper>
		</Layout>
		)
}

export default EpisodeTemplate


export const pageQuery = graphql`
	query($id : String!, $title: String!){
		strapiEpisode( id : { eq : $id}){
			id
			title
			serie
		    published_at(formatString:"MM/D/YYYY")
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
				picture{
					localFile{
					childImageSharp{
						gatsbyImageData(
							layout: CONSTRAINED
						)
					}
				}
				}
			}
		    
		}
		podcastRssFeedEpisode(item: {title : {eq: $title}}){
			item{
				title
				enclosure{
					url
				}
			isoDate
			}
		}
	}
`