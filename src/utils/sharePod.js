import React from 'react'
import SocialShare from './socialShare'
import { useStaticQuery, graphql } from 'gatsby'
// import { Link } from 'gatsby'
import { Wrapper } from './sharePodStyle'





const SharePodcast = ({ title }) => {
  const data = useStaticQuery(graphql `
          query{
            site{
              siteMetadata{
                emissionUrl
              }
            }
          }
          `)

    return (
        <Wrapper>
          <SocialShare title={title} path={data.site.siteMetadata.emissionUrl}/>
        </Wrapper>

    )
}


export default SharePodcast