import React from 'react'
import { Link } from 'gatsby'
import {Wrapper} from './episode_style'
import Img from 'gatsby-image'



const Episode = ({data}) =>{
	return(
		<Wrapper key={data.node.id}>
			<Link to={`/episodes/${data.node.slug}`}>
				<div className="pic">
					<Img fluid={data.node.picture.childImageSharp.fluid} alt={data.node.title_en} />
				</div>
				<div className="header">
					<div className="info-header">
						<h1>{data.node.title_en}</h1>
						<span>{data.node.published_at}</span>
					</div>
					<span className="serie">{data.node.serie_en}</span>
					<p className="description">{data.node.description_en}</p>
				</div>
			</Link>
		</Wrapper>
		)
}

export default Episode