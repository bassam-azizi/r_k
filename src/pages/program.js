import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

import SchedulesBody from '../components/schedule/schedulesBody'



const Program = (data) =>{
    return (
        <Layout> 
        	<Head title="Our Schedule" />
            <SchedulesBody data={data}/>
        </Layout>
    )
}

export default Program

export const pageQuery = graphql`
        query($locale: String!){
            morning : allStrapiSchedule(
					sort:{ fields : [start_time] , order: ASC }
				    filter: { 
				    	day_time : { time : {eq: "Morning" }},
				    	locale : { eq: $locale}
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
			noon : allStrapiSchedule(
					sort:{ fields : [start_time] , order: ASC }
				    filter: { 
				    	day_time : { time : {eq: "Noon" }},
				    	locale : { eq: $locale}
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
			afterNoon : allStrapiSchedule(
					sort:{ fields : [start_time] , order: ASC }
				    filter: { 
				    	day_time : { time : {eq: "Afternoon" }},
				    	locale : { eq: $locale}
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
			night : allStrapiSchedule(
					sort:{ fields : [start_time] , order: ASC }
				    filter: { 
				    	day_time : { time : {eq: "Night" }},
				    	locale : { eq: $locale}
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
    `