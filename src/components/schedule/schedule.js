import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Wrapper } from './schedule_style'




const Schedule = ({data}) =>{
	let episode_path = data.title.toLowerCase() ;
	let image = getImage(data.picture.localFile) ;
	return(
			<Wrapper key={data.id}>
				<Link to={`/schedule/${episode_path}`}>
					<div className="image-container">
						<GatsbyImage image={image} alt={data.title} />
					</div>
					<div className="info-container">
						<div className="header">
							<div className="title">
								<h1>{data.title}</h1>
								<p>{data.serie} </p>
							</div>
							<div className="start-time">
								<h2>{data.start_time}</h2>
							</div>
						</div>
						<div className="description">
							<p>{data.description}</p>
						</div>
					</div>
				</Link>
			</Wrapper>
		)
}

export default Schedule