import Styled from '@emotion/styled'

export const Wrapper = Styled.div`
    background-color:  #aaa;
    margin: 48px 20px 48px 0;

`
export const Info = Styled.div`
    position: relative;
    margin-left: 15px;
    text-align: left;
    width: 200px;
    overflow: hidden;
        h5{
            line-height: 18.75px;
            font-weight: 400;
            font-size: 16px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        p{
            position: absolute;
            font-weight: 200px;
            font-size: 12px;
            line-height: 14px;
            color: #919191;
        }  

        @media (max-width: 1300px){
            width: 60%;
        } 
 `