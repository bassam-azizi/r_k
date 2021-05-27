import React from 'react'
import { Link } from "gatsby-plugin-intl";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Deck } from './postStyle'


const Post = ({data}) =>{
    let image= getImage(data.node.featuredImg.localFile);
    return(
        <Deck>
            <Link className="postLink" to ={`/blog/${data.node.Slug}`}>
                <GatsbyImage image={image} alt="A dinosaur" />
            </Link>
            <div className='info'>
                <span>i</span>
                <Link className="infoContent" to={`/blog/${data.node.Slug}`}>
                    <h4>{data.node.name}</h4>
                    <p>{data.node.pubdate}</p>
                </Link>
            </div>
            <div className="title">
                <p>{data.node.name}</p>
            </div>
        </Deck>
    )
}

export default Post