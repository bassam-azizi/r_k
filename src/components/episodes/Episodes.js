import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Podcast from './podcast'


const Episodes = () =>{
  const data = useStaticQuery(graphql`
      query{
        allPodcastRssFeedEpisode{
          edges{
            node{
              id
              item{
                pubDate
                title
                enclosure{url length(formatString:"MMMM Do, YYYY")}
              }
            }
          }
        }
      }
  `)
  return(
    <div>{data.allPodcastRssFeedEpisode.edges.map(edge =>(
      <Podcast data={edge.node} key={edge.node.id}/>
    ))}</div>
  )
}

export default Episodes
