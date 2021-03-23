import React from 'react'
import Social_Share from '../utils/socialShare'
import { useStaticQuery, graphql } from 'gatsby'
import { Wrapper } from "./styleShareBlog"


const Share_Blog = ({ title, img }) => {
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
			<Social_Share title={title} img={img} path={data.site.siteMetadata.blogUrl+"/"+title}/>
		</Wrapper>
    )
}

export default Share_Blog