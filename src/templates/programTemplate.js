import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from '../components/layout'
import { Wrapper } from './programTemplate_style'


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
						<h1>{data.strapiSchedule.title_en}</h1>
						<p>{data.strapiSchedule.serie_en}</p>
					</div>
					<div className="info_two">
						<h1>{data.strapiSchedule.start_time}</h1>
						<p>{data.strapiSchedule.published_at}</p>
					</div>
				</div>
					<div className="description">
						<p>{data.strapiSchedule.description_en}</p>
					</div>
			</Wrapper>
		</Layout>
		)
}

export default ProgramTemplate

export const pageQuery = graphql`
	query($id : String!){
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
	        picture{
		    	localFile{
		    		childImageSharp{
		    			gatsbyImageData(
		    				layout: FULL_WIDTH
		    			)
		    		}
		    	}
		    }

		}
	}
`