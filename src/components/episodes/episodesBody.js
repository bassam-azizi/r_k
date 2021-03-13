import React from 'react'
import { Link , graphql, useStaticQuery } from 'gatsby'

import { Wrapper } from './episodeBodyStyle'

import Podcast from './podcast'


const Episodes = () =>{
  const data = useStaticQuery(graphql`
      query{
        allPodcastRssFeedEpisode{
          edges{
            node{
              id
              item{
                isoDate(formatString:"MMMM Do, YYYY")
                title
                enclosure{
                  url 
              }
              }
            }
          }
        }
      }
  `)
  return(
    <Wrapper>
          
          {/*<Link to="/">Audio Emission </Link>
          <Link to="/">Video Emission</Link>*/}
          <div className="container">
            {data.allPodcastRssFeedEpisode.edges.map(edge =>(
              <Podcast data={edge.node} key={edge.node.id}/>
            ))}
          </div>
    </Wrapper>
  )
}

export default Episodes
