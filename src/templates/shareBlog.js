import React from 'react'
import SocialShare from '../utils/socialShare'
import { useStaticQuery, graphql } from 'gatsby'
import { Wrapper } from "./styleShareBlog"


const ShareBlog = ({ title, img }) => {
	const data = useStaticQuery(graphql `
          query{
            site{
              siteMetadata{
                blogUrl
              }
            }
          }
          `)
    return (
        <Wrapper>
			<SocialShare title={title} img={img} path={data.site.siteMetadata.blogUrl+"/"+title}/>
		</Wrapper>
    )
}

export default ShareBlog