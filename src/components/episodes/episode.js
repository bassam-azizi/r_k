import React from 'react'
import { Link } from 'gatsby'
import {Wrapper} from './episode_style'
import { GatsbyImage , getImage } from "gatsby-plugin-image"



const Episode = ({data}) =>{
	let episode_path = data.node.title.toLowerCase() ;
	let image = getImage(data.node.picture.localFile);
	return(
		<Wrapper key={data.node.id}>
			<Link to={`/episodes/${episode_path}`}>
				<div className="pic">
					<GatsbyImage image={image} alt={data.node.title} />
				</div>
				<div className="header">
					<div className="header-title">
						<h1>{data.node.title}</h1>
					</div>
					<div className="header-info">
						<span>{data.node.published_at}</span>
						<span className="serie">{data.node.serie}</span>
					</div>
					<p className="description">{data.node.description}</p>
				</div>
			</Link>
		</Wrapper>
		)
}

export default Episode