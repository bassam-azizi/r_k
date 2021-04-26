import React from 'react'
import { useStaticQuery , graphql } from 'gatsby'
import Episode from './episode'
import { Wrapper, Container } from './schedule_style'



const Schedule = () =>{
	const data = useStaticQuery( graphql`
		query{
			morning: allStrapiSchedule(
					sort:{ fields : [start_time] , order: ASC }
				    filter: { day_time : { time_en : {eq: "Morning" }}}
					){
						nodes{
					    	id
						    title_en
						    title_fr
						    title_ar
						    serie_en
						    serie_fr
						    serie_ar
						    start_time
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
			afterNoon: allStrapiSchedule(
					sort:{ fields : [start_time] , order: ASC }
				    filter: { day_time : { time_en : {eq: "AfterNoon" }}}
					){
						nodes{
					    	id
						    title_en
						    title_fr
						    title_ar
						    serie_en
						    serie_fr
						    serie_ar
						    start_time
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
			evening: allStrapiSchedule(
					sort:{ fields : [start_time] , order: ASC }
				    filter: { day_time : { time_en : {eq: "evening" }}}
					){
						nodes{
					    	id
						    title_en
						    title_fr
						    title_ar
						    serie_en
						    serie_fr
						    serie_ar
						    start_time
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
			late: allStrapiSchedule(
					sort:{ fields : [start_time] , order: ASC }
				    filter: { day_time : { time_en : {eq: "late" }}}
					){
						nodes{
					    	id
						    title_en
						    title_fr
						    title_ar
						    serie_en
						    serie_fr
						    serie_ar
						    start_time
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
			}
	`)
	const schedule_render = (schedules,title) =>{
		return (
			<Container>
				<h1 className="time_title">{title}</h1>
				<div className="time_schedules">
					{schedules.map(node=>
										<Episode data={node} />
									)}
				</div>
			</Container>
	)};
	return(
		<Wrapper>
			
			{data.morning.nodes.length>0?
									schedule_render(data.morning.nodes, "Morning")				
									:
									null
			}{data.afterNoon.nodes.length>0?
									schedule_render(data.afterNoon.nodes, "After noon")				
									:
									null
			}{data.evening.nodes.length>0?
									schedule_render(data.evening.nodes, "Evening")				
									:
									null
			}{data.late.nodes.length>0?
									schedule_render(data.late.nodes, "Late")				
									:
									null
			}
			
		</Wrapper>
	)
}

export default Schedule