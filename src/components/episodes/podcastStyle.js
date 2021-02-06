import Styled from '@emotion/styled'

export const Wrapper = Styled.div`
    width: 600px;
        *{
        outline: none;
        }
    background-color:  #aaa;
`
export const Info = Styled.div`
    position: relative;
    margin-left: 15px;
    text-align: left;
        h5{
            line-height: 18.75px;
            font-weight: 400;
            font-size: 16px;
        }
        p{
        position: absolute;
        font-weight: 200px;
        font-size: 12px;
        line-height: 14px;
        color: #919191;
        }   
`