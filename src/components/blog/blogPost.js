import React from 'react'
import { GatsbyImage , getImage } from "gatsby-plugin-image"
import {Wrapper, Picture, Title, H1, Lin} from './blogPostStyle'





const Blogpost = ({data}) =>{
    let image = getImage(data.node.featuredImg.localFile) ;
    return(
            <Wrapper key={data.node.Slug}>
                <Lin to={`/blog/${data.node.Slug}`}>
                    <Picture>
                        {/*<Img fluid={data.node.featuredImg.childImageSharp.fluid} loading="lazy" alt={data.node.name} />*/}
                        <GatsbyImage image={image} alt={data.node.name} />
                    </Picture>  
                    <Title>
                        <div className="post-info">
                            <span>Culture</span>
                            <span className="post-date">{data.node.pubdate}</span>
                        </div>
                        <H1>{data.node.name}</H1>
                    </Title>
                </Lin>
            </Wrapper>
    )
}

export default Blogpost