import Styled from '@emotion/styled'
import {Link} from 'gatsby'


export const Deck  = Styled.div`
        margin: 0;
        padding: 0;
        height: 331px;
        &:nth-of-type(1){
            width: 433px;
        } 
        &:nth-of-type(2){
            /* width: 558px; */
            width: 529px
        }   
        &:nth-of-type(3){
            width: 529px;
        } 
        &:nth-of-type(4){
            /* width: 463px; */
            width: 433px;
        }      
        Img {
            object-fit: cover;
        }
        .gatsby-image-wrapper{
            height: 331px;
        }
        position: relative;
        `
export const Lin = Styled(Link)`
        opacity: .8;
        text-decration: none;
        color: #222;
        &:hover{
            opacity: .9;
        }
    `
export const Info = Styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 35px;
        height: 35px;
        font-family: 'Rhodium Libre';
        border-radius: 50%;
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
        &:hover {
            right: 0;
            top: 0;
            width: 60%;
            height: 100%;
            border-radius: 0;
            transition: .4s linear;
            background-color: #f2f2f2cc;
            cursor: default;

        }
        span{
            margin-left: 27px;
        }
        &:hover span{
            display: none;
        }
        a{
            list-style: none;
            position: relative;
            align-self: flex-start;
            width: 100%;
            margin: 14px 14px;
            color: #373737;
        }
        a h4{
            opacity:0;
            visibility: hidden;
            padding: 10px 2px;
            overflow: hidden;
            position: absolute;
            top: 0;
            left: 0;
        }
        &:hover a h4{
            opacity: 1;
            visibility:  visible;
            transition: .7s linear;
            display: block;
        }
        &:hover a p{
            opacity: 1;
            visibility: visible;
        }
        a p{
            position: absolute;
            font-size: 12px;
            color: #373737cc;
            opacity: 0;
            visibility: hidden;
            transition: .9s linear;
        }
    `
export const Title = Styled.div`
        width: 100%;
        position: absolute;
        bottom: 0;
        text-align: center;
        background-color: #fff;
        padding: 3px 0;
        opacity: 1;
        display: none;
`