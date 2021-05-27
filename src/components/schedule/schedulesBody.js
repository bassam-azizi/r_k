import React from 'react'
import { useStaticQuery , graphql } from 'gatsby'
import Schedule from './schedule'
import {TodayIs} from '../../utils/todayIs'
import { Wrapper, Container } from './schedulesBody_style'



const SchedulesBody = () =>{
	const data = useStaticQuery( graphql`
		query{
			morning: allStrapiSchedule(
					sort:{ fields : [start_time] , order: ASC }
				    filter: { day_time : { time : {eq: "Morning" }}}
					){
						nodes{
					    	id
						    title
						    serie
						    start_time
						    episode_length
						    description
						    picture{
						    	localFile{
						    		childImageSharp{
						    			gatsbyImageData(
						    				layout: FULL_WIDTH
						    			)
						    		}
						    	}
						    }
						    
					        day_time{
					        	time
					        	}
				  			}
				  		}
			afterNoon: allStrapiSchedule(
					sort:{ fields : [start_time] , order: ASC }
				    filter: { day_time : { time : {eq: "AfterNoon" }}}
					){
						nodes{
					    	id
						    title
						    serie
						    start_time
						    episode_length
						    description
						    picture{
						    	localFile{
						    		childImageSharp{
						    			gatsbyImageData(
						    				layout: FULL_WIDTH
						    			)
						    		}
						    	}
						    }
						    
					        day_time{
					        	time
					        	}
					        }
				  		}
			evening: allStrapiSchedule(
					sort:{ fields : [start_time] , order: ASC }
				    filter: { day_time : { time : {eq: "evening" }}}
					){
						nodes{
					    	id
						    title
						    serie
						    start_time
						    episode_length
						    description
						    picture{
						    	localFile{
						    		childImageSharp{
						    			gatsbyImageData(
						    				layout: FULL_WIDTH
						    			)
						    		}
						    	}
						    }
						    
					        day_time{
					        	time
					        	}
					        }
				  		}
			late: allStrapiSchedule(
					sort:{ fields : [start_time] , order: ASC }
				    filter: { day_time : { time : {eq: "late" }}}
					){
						nodes{
					    	id
						    title
						    serie
						    start_time
						    episode_length
						    description
						    picture{
						    	localFile{
						    		childImageSharp{
						    			gatsbyImageData(
						    				layout: FULL_WIDTH
						    			)
						    		}
						    	}
						    }
						    
					        day_time{
					        	time
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
										<Schedule data={node} />
									)}
				</div>
			</Container>
	)};
	return(
		<Wrapper>
			<h1 className="today">Today is <TodayIs /></h1>
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

export default SchedulesBody