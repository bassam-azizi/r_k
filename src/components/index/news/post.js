import React from 'react'
import {Link} from 'gatsby'
import Img from 'gatsby-image'
import Styled from '@emotion/styled'

const Deck  = Styled.div`
    margin: 0;
    padding: 0;
    height: 331px;
    &:nth-child(1){
        width: 558px;
    } 
    &:nth-child(2){
        width: 433px;
    }   
    &:nth-child(3){
        width: 463px;
    } 
    &:nth-child(4){
        width: 529px;
    }      
    Img {
        object-fit: cover;
    }
    .gatsby-image-wrapper{
        height: 331px;
    }
`
const Lin = Styled(Link)`
    text-decration: none;
    color: #222;
`

const Post = props =>{
    return(
        <Deck>
            <Lin to ={`/blog/${props.data.node.Slug}`}>
            <Img fluid={props.data.node.featuredImg.childImageSharp.fluid} alt={props.data.node.name} />
            </Lin>
        </Deck>
    )
}

export default Post