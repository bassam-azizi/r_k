import Styled from '@emotion/styled'
import { Link } from 'gatsby'


export const Wrapper = Styled.div`
    padding: 0;
    border: .5px solid #fff;
    max-width: 319px;
    height: 252px;
    position: relative;
    margin: 138px 0 0 138px;
`
export const Picture = Styled.picture`
    width: 100%;
    margin: 0;
    height: auto;
`
export const Title = Styled.div`
    width: 100%;
    height: 73px;
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
    font-size: 18px;
    text-align: left;
    text-indent: 3px;
    text-align: center;
`
export const Lin = Styled(Link)`
    text-decoration: none;
    color: #222;
` 