import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Styled from '@emotion/styled'
import {useStaticQuery, graphql} from 'gatsby'
import { Link } from "gatsby-plugin-intl"


const LogoWrap = Styled(Link)`
  min-width: 152px;
  min-height:104px;
  margin: 0 0 .1px 0;

  @media (max-width: 768px){
    align-self: center;
  }
  @media (max-width: 470px){
    align-self: left;
    margin: 5px 0 40px;
  }

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 75px;
  }
`



const Logo = () =>{
    const data = useStaticQuery(graphql`
        query{
            file(name: {eq: "logo"}, extension: {eq: "png"}){
                  childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH)
                  }
            }
        }
    `)
    return(
        <LogoWrap to='/'>
            {<GatsbyImage image={getImage(data.file)} alt="A dinosaur" />}
        </LogoWrap>
    )
}

export default Logo