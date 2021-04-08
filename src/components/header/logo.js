import React from 'react'
import Img from 'gatsby-image'
import Styled from '@emotion/styled'
import {useStaticQuery, graphql} from 'gatsby'
import { Link } from "gatsby-plugin-intl"


const LogoWrap = Styled(Link)`
  margin: auto 0;
  min-width: 152px;
  min-height:104px;
  margin: 0 0 10px 20px;

  @media (max-width: 768px){
    align-self: center;
  }
  @media (max-width: 470px){
    align-self: left;
    margin: 5px 0 40px 40px;
  }

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 75px;
  }
`



const Logo = () =>{
    const data = useStaticQuery(graphql`
        query{
            file(name: {eq: "logo"}, extension: {eq: "png"}){
                childImageSharp{
                    fixed(width: 160, quality: 80){
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)
    return(
        <LogoWrap to='/'>
            <Img fixed={data.file.childImageSharp.fixed} loading="eager"  alt="Radio Khemir" />
        </LogoWrap>
    )
}

export default Logo