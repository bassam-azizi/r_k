import Styled from '@emotion/styled'
import { Link } from 'gatsby'


export const Wrapper = Styled.div`
    padding: 0;
    border: .5px solid #fff;
    max-width: 319px;
    height: 252px;
    position: relative;
    margin: 68px 0 0 38px;
    overflow: hidden;

    @media (max-width: 1194px){
        margin-left: 58px;
        max-width: 400px;
        height: 300px;
    }

    @media (max-width: 1030px){
        max-width: 319px;
        height: 252px;
    }

    @media (max-width: 858px){
        margin-left: 20px;
        margin-top: 88px;
    }

    @media (max-width: 730px){
        max-width: 430px;
        height: 330px;
        margin-top: 98px;
    }

    @media (max-width: 464px){
        max-width: 370px;
        height: 280px;
    }

    @media (max-width: 426px){
        max-width: 300px;
        height: 250px;
    }

    @media (max-width: 350px){
        max-width: 250px;
        height: 250px;
    }
        :hover{
            background: darken($red, 1.5%);
              border: 1px solid rgba(#000, .05);
              box-shadow: 1px 1px 2px rgba(#fff, .2);
              color: lighten($red, 18%); 
              text-shadow: -1px -1px 0 darken($red, 9.5%);
              transition: all 250ms linear;}

    :hover h1{
        color: #222;
    }
`
export const Picture = Styled.picture`
    width: 100%;
    margin: 0;
    height: auto;
    div{
        border-radius: 4px;
        }
    }
`
export const Title = Styled.div`
    width: 100%;
    height: auto;
    max-height: 100px;
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
export const H1 = Styled.h1`
    font-size: 16px;
    text-align: left;
    text-indent: 3px;
    text-align: center;
    padding-top: 5px;
    color: #666;
`
export const Lin = Styled(Link)`
    text-decoration: none;
    color: #222222ec;
` 