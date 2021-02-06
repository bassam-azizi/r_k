import Styled from '@emotion/styled'
// import px2vw from '../../utils/px2vw'

export const Wrapper = Styled.div`
    display: flex;
    flex-direction: row;
    padding: 6px;
`
export const LeftColumn = Styled.div`
    width: 65%;
    p{
        letter-spacing: 0.2px;
        line-height: 2.5;
        padding: 0 19px; 
    }
    padding: 7px;
`
export const H1 = Styled.h1`
    line-height: 3;
    font-weight: 400;
    padding-left: 12px;
`
export const Li = Styled.li`
    line-height: 4;
    letter-spacing: 0.2px;
    padding-left: 4rem;
`
export const Separator = Styled.div`
    width: 1px;
    height: 100vh;
    background-color: #c1c1c1;
    align-self: center;
`