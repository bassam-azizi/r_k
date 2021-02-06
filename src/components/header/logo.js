import React from 'react'
import Img from 'gatsby-image'
import Styled from '@emotion/styled'
import {Link, useStaticQuery, graphql} from 'gatsby'


const LogoWrap = Styled(Link)`
  margin: auto 0;
  min-width: 152px;
  min-height:104px;
  margin-bottom: 20px;
  

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 75px;
  }
`



const Logo = () =>{
    const data = useStaticQuery(graphql`
    query{
        file(name: {eq: "logo"}, extension: {eq: "png"}){
            childImageSharp{
                fluid(maxWidth: 200, pngQuality: 80){
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
    `)
    return(
        <LogoWrap to='/'>
            <Img fluid={data.file.childImageSharp.fluid} loading="eager" alt="Radio Khemir" />
        </LogoWrap>
    )
}

export default Logo