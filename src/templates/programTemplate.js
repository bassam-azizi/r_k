import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Reactmarkdown from "react-markdown"

import { Wrapper } from './programTemplate_style'
import Podcast from '../utils/podcast/podcastPlayer'
import Layout from '../components/layout'


const ProgramTemplate = ({data}) =>{
	let image = getImage(data.strapiSchedule.picture.localFile);
	return(
		<Layout>
			<Wrapper>
				<div className="image">
					<GatsbyImage image={image} alt={data.strapiSchedule.title} />
				</div>
				<div className="header">
					<div className="info_one">
						<h1>{data.strapiSchedule.title}</h1>
						<p>{data.strapiSchedule.serie}</p>
					</div>
					<div className="info_two">
						<h1>{data.strapiSchedule.start_time}</h1>
						<p>{data.strapiSchedule.published_at}</p>
					</div>
				</div>
				<div className="podcast">
					<Podcast data={data.podcastRssFeedEpisode} />
				</div>
				<div className="description">
                    <Reactmarkdown children={data.strapiSchedule.description} />
				</div>
			</Wrapper>
		</Layout>
		)
}

export default ProgramTemplate

export const pageQuery = graphql`
	query($id : String!, $title: String){
		strapiSchedule( id : { eq : $id}){
			id
			title
			serie
		    start_time
		    published_at(formatString:"MM/D/YYYY")
		    episode_length
		    description
	        day_time{
	        	time
	        }
	        author{
	        	name
	        }
	        contributors{
	        	name
	        }
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