import React from 'react'
import { Link } from 'gatsby'
import {Wrapper} from './episode_style'
import { GatsbyImage , getImage } from "gatsby-plugin-image"



const Episode = ({data}) =>{
	let image = getImage(data.node.picture.localFile);
	return(
		<Wrapper key={data.node.id}>
			<Link to={`/episodes/${data.node.title}`}>
				<div className="pic">
					<GatsbyImage image={image} alt={data.node.title} />
				</div>
				<div className="header">
					<div className="info-header">
						<h1>{data.node.title}</h1>
						<span>{data.node.published_at}</span>
					</div>
					<span className="serie">{data.node.serie}</span>
					<p className="description">{data.node.description}</p>
				</div>
			</Link>
		</Wrapper>
		)
}

export default Episode