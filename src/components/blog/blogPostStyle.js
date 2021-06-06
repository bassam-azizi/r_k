import Styled from '@emotion/styled'
import { Link } from "gatsby-plugin-intl";



export const Wrapper = Styled.div`
    padding: 0;
    border: .5px solid #fff;
    height: 252px;
    position: relative;
    overflow: hidden;
    max-width: 400px;

    @media (max-width: 1194px){
        height: 300px;
    }

    @media (max-width: 1030px){
        height: 252px;
    }


    @media (max-width: 730px){
        height: 330px;
    }

    @media (max-width: 464px){
        height: 280px;
    }

    @media (max-width: 426px){
    }

    @media (max-width: 350px){
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
    div{
        border-radius: 4px;
        height: 77%;
`
export const Title = Styled.div`
    width: 100%;
    padding: 12px 1px;
    background-color: #ffffff;
    
    .post-info{
        display: flex;
        justify-content: space-between;
        font-size: 14px;

        span:nth-of-type(1){
            color: #7F8A64;
        }
        span:nth-of-type(2){
            color: #777;
        }
    }
`
export const H1 = Styled.h1`
    font-size: 16px;
    text-align: left;
    text-indent: 10px;
    color: #666;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ". . .";
    position: relative;

    ::before{
        content: "";
        width: 3px;
        height: 14px;
        background: #C52127;
        display: block;
        position: absolute;
        top: 5px;
    }
`
export const Lin = Styled(Link)`
    text-decoration: none;
    color: #222222ec;
` 