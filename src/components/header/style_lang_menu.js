import Styled from '@emotion/styled'
import { Link } from 'gatsby'

export const Wrapper = Styled.div`
    background: #373737;
    display: block;
    width: 188px;
    color: #fff;
    font-family: Roboto;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 20;
    transform: ${ (props) => ( props.menu_open ? 'translateY(0)' : 'translateY(-700px)' )};
    transition: transform 1s ease;
`
export const Close = Styled.span`
    display: block;
    font-size: 26px;
    color:#fff;
    width: 100%;
    text-align: center;
    padding: 20px 0 10px;
    font-weight: lighter;
    :hover{
        color: #c52127;
        background: #303030ee;
    }
    cursor: pointer;
`
export const Lin = Styled(Link)`
    font-size: 24px;
    display: block;
    padding: 41px 0;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    border-bottom: 1px solid #cfcfcf12;
    :hover{
        color: #519657 ;
        background: #303030ee;
        opacity: .7;
    }
    :focus{
        color: #c52127;
    }
`