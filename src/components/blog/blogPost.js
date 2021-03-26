import React from 'react'
import Img from 'gatsby-image'
import {Wrapper, Picture, Title, H1, Lin} from './blogPostStyle'





const Blogpost = props =>{
    return(
            <Wrapper key={props.data.node.Slug}>
                <Lin to={`/blog/${props.data.node.Slug}`}>
                    <Picture>
                        <Img fixed={props.data.node.featuredImg.childImageSharp.fixed} loading="lazy" alt={props.data.node.name} />
                    </Picture>  
                    <Title>
                        <H1>{props.data.node.name}</H1>
                    </Title>
                </Lin>
            </Wrapper>
    )
}

export default Blogpost