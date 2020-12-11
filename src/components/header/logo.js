import React from 'react'
import Img from 'gatsby-image'
import Styled from '@emotion/styled'
import {useStaticQuery, graphql} from 'gatsby'


const LogoWrap = Styled.div`
  margin: auto 0;
  flex: 0 1 86px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 75px;
  }
`



const Logo = () =>{
    const data = useStaticQuery(graphql`
    query{
        file(name: {eq: "logo"}, extension: {eq: "png"}){
            childImageSharp{
                fluid(maxWidth: 100, pngQuality: 80){
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
    `)
    return(
        <LogoWrap>
            <Img fluid={data.file.childImageSharp.fluid} alt="Radio Khemir" />
        </LogoWrap>
    )
}

export default Logo