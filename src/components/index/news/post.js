import React from 'react'
import {Link} from 'gatsby'
import Img from 'gatsby-image'
import Styled from '@emotion/styled'

const Deck  = Styled.div`
    opacity: .8;
    margin: 0;
    padding: 0;
    height: 331px;
    &:hover{
        opacity: .4;
    }
    &:nth-of-type(1){
        width: 433px;
    } 
    &:nth-of-type(2){
        width: 558px;
    }   
    &:nth-of-type(3){
        width: 529px;
    } 
    &:nth-of-type(4){
        width: 463px;
    }      
    Img {
        object-fit: cover;
    }
    .gatsby-image-wrapper{
        height: 331px;
    }
    position: relative;
`
const Lin = Styled(Link)`
    text-decration: none;
    color: #222;
`
const Span = Styled.p`
    border-radius: 50%;
    padding: 4px 10px;
    background-color: #fff;
    color: #222;
    position: absolute;
    top: 50%;
    right: 50%;
    font-family: Roboto;
    font-weight: bold;
    opacity: .6;
`


const Post = props =>{
    return(
        <Deck>
            <Lin to ={`/blog/${props.data.node.Slug}`}>
            <Img fluid={props.data.node.featuredImg.childImageSharp.fluid} alt={props.data.node.name} />
            </Lin>
            <Span>i</Span>
        </Deck>
    )
}

export default Post