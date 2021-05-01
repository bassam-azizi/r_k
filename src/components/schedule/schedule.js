import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { Wrapper } from './schedule_style'




const Schedule = ({data}) =>{
	let episode_path = data.title_en.toLowerCase() ;
	return(
			<Wrapper key={data.id}>
				<Link to={`/schedule/${episode_path}`}>
				{console.log(data.title_en.toLowerCase())}
					<div className="image-container">
						<Img fluid={data.picture.childImageSharp.fluid} alt={data.title_en}/>
					</div>
					<div className="info-container">
						<div className="header">
							<div className="title">
								<h1>{data.title_en}</h1>
								<p>{data.serie_en} </p>
							</div>
							<div className="start-time">
								<h2>{data.start_time}</h2>
							</div>
						</div>
						<div className="description">
							<p>{data.description_en}</p>
						</div>
					</div>
				</Link>
			</Wrapper>
		)
}

export default Schedule