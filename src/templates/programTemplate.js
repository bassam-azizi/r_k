import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { Wrapper } from './programTemplate_style'


const Program_Template = ({data}) =>{
	return(
		<Layout>
			<Wrapper>
				<div className="image">
					<Img fluid={data.strapiSchedule.picture.childImageSharp.fluid} alt={data.strapiSchedule.title_en} />
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

export default Program_Template

export const pageQuery = graphql`
	query($title : String!){
		strapiSchedule( title_en : { eq : $title}){
			id
			title_en
			title_fr
			title_ar
			serie_en
		    serie_fr
		    serie_ar
		    start_time
		    published_at(formatString:"MM/D/YYYY")
		    episode_length
		    description_en
		    description_fr
		    description_ar
		    picture{
			    childImageSharp{
			    	fluid(maxWidth: 700){
						...GatsbyImageSharpFluid
			        }
		        }
	      	}
	        day_time{
	        	time_en
	        	}

		}
	}
`