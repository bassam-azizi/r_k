import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from '../components/layout'
import { Wrapper } from './programTemplate_style'


const EpisodeTemplate = ({data}) =>{
	let image =getImage(data.strapiEpisode.picture.localFile) ;
	return(
		<Layout>
			<Wrapper>
				<div className="image">
					<GatsbyImage image={image} alt={data.strapiEpisode.title_en} />
				</div>
				<div className="header">
					<div className="info_one">
						<h1>{data.strapiEpisode.title_en}</h1>
						<p>{data.strapiEpisode.serie_en}</p>
					</div>
					<div className="info_two">
						<h1>14</h1>
						<p>{data.strapiEpisode.published_at}</p>
					</div>
				</div>
					<div className="description">
						<p>{data.strapiEpisode.description_en}</p>
					</div>
			</Wrapper>
		</Layout>
		)
}

export default EpisodeTemplate


export const pageQuery = graphql`
	query($id : String!){
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
							layout: FULL_WIDTH
						)
					}
				}
			}
		    
	      	author{
	      		name
	      	}
		}
	}
`