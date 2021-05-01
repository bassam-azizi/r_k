import React from 'react'
import Img from 'gatsby-image'
import {Wrapper, Picture, Title, H1, Lin} from './blogPostStyle'





const Blogpost = ({data}) =>{
    return(
            <Wrapper key={data.node.Slug}>
                <Lin to={`/blog/${data.node.Slug}`}>
                    <Picture>
                        <Img fixed={data.node.featuredImg.childImageSharp.fixed} loading="lazy" alt={data.node.name} />
                    </Picture>  
                    <Title>
                        <H1>{data.node.name}</H1>
                    </Title>
                </Lin>
            </Wrapper>
    )
}

export default Blogpost