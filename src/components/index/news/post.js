import React from 'react'
import {Link} from 'gatsby'
import Img from 'gatsby-image'
import Styled from '@emotion/styled'

const Deck  = Styled.div`
    margin: 0;
    padding: 0;
    height: 331px;
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
    opacity: .8;
    text-decration: none;
    color: #222;
    &:hover{
        opacity: .9;
    }
    `
    const Span = Styled.span`
    font-family: 'Rhodium Libre';
    border-radius: 50%;
    padding: 4px 13px;
    background-color: #f2f2f2;
    color: #7F8A64;
    position: absolute;
    top: 50%;
    right: 50%;
    font-weight: 400;
    font-size: 22px;
    opacity: 1;
    cursor: pointer;
    z-index: 5;
    &:hover{
        display: none;
    }
`
const Title = Styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    text-align: center;
    background-color: #fff;
    padding: 3px 0;
    opacity: 1;
    display: none;
`


const Post = props =>{
    return(
        <Deck>
            <Lin to ={`/blog/${props.data.node.Slug}`}>
            <Img fluid={props.data.node.featuredImg.childImageSharp.fluid} alt={props.data.node.name} />
            </Lin>
            <Span>i</Span>
            <Title>
                <p>{props.data.node.name}</p>
            </Title>
        </Deck>
    )
}

export default Post