import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Podcast from './podcast'


const Episodes = () =>{
  const data = useStaticQuery(graphql`
      query{
        allAnchorEpisode{
          edges{
            node{
              title
              enclosure{
                url
              }
              pubDate
              id
            }
          }
        }
      }
  `)
  return(
    <div>{data.allAnchorEpisode.edges.map(edge =>(
      <Podcast data={edge.node} key={edge.node.id}/>
    ))}</div>
  )
}

export default Episodes
