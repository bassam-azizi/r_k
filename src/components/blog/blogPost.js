import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

import Styled from '@emotion/styled'


const Wrapper = Styled.div`
    padding: 0;
    border: .5px solid #fff;
    max-width: 319px;
    height: 252px;
    position: relative;
    margin: 138px 0 0 138px;
`
const Picture = Styled.picture`
    width: 100%;
    margin: 0;
    height: auto;
`
const Title = Styled.div`
    width: 100%;
    height: 73px;
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 4px 1px;
    text-align: center;
    border-top: .5px solid #fff;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
`
const H1 = Styled.h1`
    font-size: 18px;
    text-align: left;
    text-indent: 3px;
    text-align: center;
`
const Lin = Styled(Link)`
    
` 

const Blogpost = props =>{
    return(
            <Wrapper key={props.data.node.Slug}>
                <Link to={`/blog/${props.data.node.Slug}`}>
                    <Picture>
                    <Img fixed={props.data.node.featuredImg.childImageSharp.fixed} alt="anythings " />
                    </Picture>
                    <Title>
                        <H1>{props.data.node.name}</H1>
                    </Title>
                </Link>
            </Wrapper>
    )
}

export default Blogpost