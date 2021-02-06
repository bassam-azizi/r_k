import Styled from '@emotion/styled'


export const Wrapper = Styled.div`
            width : 400px;
            margin: 0 auto;
            padding: 4rem;
            position: relative;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            font-family: Roboto;
            background-color: #e5e5E5 ;
            border: 1px solid #373737 ;
            & > div > h1{
                padding: 2rem 0;
            }
            & > ul > li{
                line-height: 40px;
            }
`
export const Title = Styled.div`
            padding: 20px 0;
`
export const Bars = Styled.div`
            position: absolute;
            top: -36px;
            height: 60px;
            display: flex;
`
export const Bar = Styled.div`
            background-color: red;
            width: 3px;
            margin-right: 16px;
`
export const Footer = Styled.div`
            padding: 30px 0;
`