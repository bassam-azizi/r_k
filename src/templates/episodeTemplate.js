import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { Wrapper } from './programTemplate_style'


const Episode_Template = ({data}) =>{
	return(
		<Layout>
			<Wrapper>
				<div className="image">
					<Img fluid={data.strapiEpisode.picture.childImageSharp.fluid} alt={data.strapiEpisode.title_en} />
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

export default Episode_Template


export const pageQuery = graphql`
	query($slug : String!){
		strapiEpisode( slug : { eq : $slug}){
			id
			title_en
			title_fr
			title_ar
			serie_en
		    serie_fr
		    serie_ar
		    published_at(formatString:"MM/D/YYYY")
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
	      	author{
	      		name
	      	}
		}
	}
`