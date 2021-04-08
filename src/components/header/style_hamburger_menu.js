import Styled from '@emotion/styled'
import { Link } from 'gatsby'




export const Wrapper = Styled.div `
    position: relative;
    background-color: rgb(128, 138, 102);
    color: #fff;
    padding: 51px 0 0;
    z-index: 20;

    position: absolute;
    top: 150px;
    transform: ${ (props) => ( props.menu ? 'translateX(0)' : 'translateX(-400px)' )};
    transition: transform 1s linear;


    span{
        position: absolute;
        top: 15px;
        right: 21px;
        color: #fff;
        font-size: 26px;
        font-family: sans-serif;
        display: block;
        cursor: pointer;
        :hover{
            color: #8B656D ;
            // color: #c52127 ;
        }     
    }

    `
export const Lin = Styled(Link)
`
        display: block;
        width: 236px;
        padding: 27px 0 27px 39px;
        font-size: 24px;
        color: #fff;
        text-align: left;
        text-decoration: none;
        cursor: pointer;
        border-bottom: 1px solid #cfcfcf12 ;

        :hover{
            opacity: .7;
            background: #2E3224;
            color: #fff;
        }

    }

`