import React from 'react'
import {Link} from 'gatsby'
import Img from 'gatsby-image'
import { Deck , Title, Lin, Info} from './postStyle'


const Post = props =>{
    return(
        <Deck>
            <Lin to ={`/blog/${props.data.node.Slug}`}>
                <Img fluid={props.data.node.featuredImg.childImageSharp.fluid} alt={props.data.node.name} />
            </Lin>
            <Info>
                <span>i</span>
                <Link to={`/blog/${props.data.node.Slug}`}>
                    <h4>{props.data.node.name}</h4>
                    <p>{props.data.node.pubdate}</p>
                </Link>
            </Info>
            <Title>
                <p>{props.data.node.name}</p>
            </Title>
        </Deck>
    )
}

export default Post