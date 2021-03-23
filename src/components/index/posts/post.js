import React from 'react'
import {Link} from 'gatsby'
import Img from 'gatsby-image'
import { Deck } from './postStyle'


const Post = props =>{
    return(
        <Deck>
            <Link className="postLink" to ={`/blog/${props.data.node.Slug}`}>
                <Img fluid={props.data.node.featuredImg.childImageSharp.fluid} alt={props.data.node.name} />
            </Link>
            <div className='info'>
                <span>i</span>
                <Link className="infoContent" to={`/blog/${props.data.node.Slug}`}>
                    <h4>{props.data.node.name}</h4>
                    <p>{props.data.node.pubdate}</p>
                </Link>
            </div>
            <div className="title">
                <p>{props.data.node.name}</p>
            </div>
        </Deck>
    )
}

export default Post