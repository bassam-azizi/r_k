import Styled from '@emotion/styled'
import { Link } from 'gatsby'


export const Wrapper = Styled.div`
    position: relative;
    background-color: #373737;
    color: #fff;
    padding: 51px 0 0;
    /* width: 100%; */
    /* height: 588px; */
` 

export const Close = Styled.span`
    position: absolute;
    top: 15px;
    right: 21px;
    color: #fff;
    font-size: 26px;
    font-family: Roboto;
    display: block;
    cursor: pointer;
    :hover{
        color: #c52127 ;
    }
`

export const Lin = Styled(Link)`
    display: block;
    width: 236px;
    padding: 27px 0 27px 20px;
    font-size: 24px;
    color: #fff;
    /* margin-left: 20px; */
    text-align: left;
    text-decoration: none;
    cursor: pointer;
    border-bottom: 1px solid #cfcfcf12 ;
    :hover{
        opacity: .7;
        background: #303030ee;
        color: #519657;
    }
`