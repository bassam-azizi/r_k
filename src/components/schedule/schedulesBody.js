import React from 'react'
import { useStaticQuery , graphql } from 'gatsby'
import { useIntl } from "gatsby-plugin-intl"
import Schedule from './schedule'
import {TodayIs} from '../../utils/todayIs'
import { Wrapper, Container } from './schedulesBody_style'



const SchedulesBody = () =>{
	const data = useStaticQuery( graphql`
		query{
			enMorning: allStrapiSchedule(
					sort:{ fields : [start_time] , order: ASC }
				    filter: { 
				    	day_time : { time : {eq: "Morning" }},
				    	locale : { eq: "en"}
				    	}
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
			frMorning: allStrapiSchedule(
					sort:{ fields : [start_time] , order: ASC }
				    filter: { 
				    	day_time : { time : {eq: "Morning" }},
				    	locale : { eq: "fr"}
				    	}
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
			arMorning: allStrapiSchedule(
					sort:{ fields : [start_time] , order: ASC }
				    filter: { 
				    	day_time : { time : {eq: "Morning" }},
				    	locale : { eq: "ar"}
				    	}
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
			enAfterNoon: allStrapiSchedule(
					sort:{ fields : [start_time] , order: ASC }
				    filter: { 
				    	day_time : { time : {eq: "afterNoon" }},
				    	locale : { eq: "en"}
				    	}
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
			frAfterNoon: allStrapiSchedule(
					sort:{ fields : [start_time] , order: ASC }
				    filter: { 
				    	day_time : { time : {eq: "afterNoon" }},
				    	locale : { eq: "fr"}
				    	}
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
			arAfterNoon: allStrapiSchedule(
					sort:{ fields : [start_time] , order: ASC }
				    filter: { 
				    	day_time : { time : {eq: "Noon" }},
				    	locale : { eq: "ar"}
				    	}
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
			enEvening: allStrapiSchedule(
					sort:{ fields : [start_time] , order: ASC }
				    filter: {
				    	 day_time : { time : {eq: "Noon" }},
				    	 locale : { eq: "en"}
				    	 }
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
			frEvening: allStrapiSchedule(
					sort:{ fields : [start_time] , order: ASC }
				    filter: {
				    	 day_time : { time : {eq: "Noon" }},
				    	 locale : { eq: "fr"}
				    	 }
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
			arEvening: allStrapiSchedule(
					sort:{ fields : [start_time] , order: ASC }
				    filter: {
				    	 day_time : { time : {eq: "Noon" }},
				    	 locale : { eq: "ar"}
				    	 }
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
			enLate: allStrapiSchedule(
					sort:{ fields : [start_time] , order: ASC }
				    filter: { 
				    	day_time : { time : {eq: "Night" }},
				    	locale : { eq: "en"}
				    	}
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
			frLate: allStrapiSchedule(
					sort:{ fields : [start_time] , order: ASC }
				    filter: { 
				    	day_time : { time : {eq: "Night" }},
				    	locale : { eq: "fr"}
				    	}
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
			arLate: allStrapiSchedule(
					sort:{ fields : [start_time] , order: ASC }
				    filter: { 
				    	day_time : { time : {eq: "Night" }},
				    	locale : { eq: "ar"}
				    	}
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
	const morning = ( locale) =>{
		switch(locale){
			case("fr"):
				return data.frMorning;
			case("ar"):
				return data.arMorning;
			default:
				return data.enMorning;
		}
	}
	const afterNoon = ( locale) =>{
		switch(locale){
			case("fr"):
				return data.frAfterNoon;
			case("ar"):
				return data.arAfterNoon;
			default:
				return data.enAfterNoon;
		}
	}
	const evening = ( locale) =>{
		switch(locale){
			case("fr"):
				return data.frEvening;
			case("ar"):
				return data.arEvening;
			default:
				return data.enEvening;
		}
	}
	const late = ( locale) =>{
		console.log(locale);
		switch(locale){
			case("fr"):
				return data.frLate;
			case("ar"):
				return data.arLate;
			default:
				return data.enLate;
		}
	}
	const currentLocale = useIntl().locale ;
	return(
		<Wrapper>
			<h1 className="today">Today is <TodayIs /></h1>
			{morning(currentLocale).nodes.length>0?
									schedule_render(morning(currentLocale).nodes, "Morning")				
									:
									null
			}
			{afterNoon(currentLocale).nodes.length>0?
									schedule_render(afterNoon(currentLocale).nodes, "After noon")				
									:
									null
			}
			{evening(currentLocale).nodes.length>0?
									schedule_render(evening(currentLocale).nodes, "Evening")				
									:
									null
			}{late(currentLocale).nodes.length>0?
									schedule_render(late(currentLocale).nodes, "Late")				
									:
									null
			}
			
		</Wrapper>
	)
}

export default SchedulesBody