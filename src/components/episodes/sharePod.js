import React from 'react'
import SocialShare from '../../utils/socialShare'
import { useStaticQuery, graphql } from 'gatsby'
// import { Link } from 'gatsby'
import { Wrapper } from './sharePodStyle'





const Share_Podcast = ({ title }) => {
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


export default Share_Podcast