import Styled from '@emotion/styled'

export const Wrapper = Styled.div`
    display: flex;
    opacity: ${(props) => (props.cast? "1" : "0")};
    visibility: ${(props) => (props.cast? "visible" : "hidden")};
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    right: -.9rem;
    top: 5.72rem;
    transition: ${(props)=>(props.cast? 'opacity 2s linear 1s' : 'opacity .1s linear')};
`


export const Progress_bar = Styled.div`
    display: flex;
    align-items: center;
    margin: 27px 0 0;
    svg{
        color: #7F8A64;
        margin-right: 15px;
        font-size: 1.2em;
    }
    ` 
export const BarContainer = Styled.div`
    height: 25px;
    background-color: #7F8A64;
    width: 279px;
    border-radius: 0 50px 50px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #fff;
`
export const Bar = Styled.div`
    height: 2px;
    background-color: #fff;
    width: 195px;
`
export const P = Styled.p`
    font-size: 14px;
    line-height: 60px;
    color: #373737;
    font-weight: 200;
    text-align: right;
    font-style: italics;
    align-self: stretch;
    text-transform: capitalize;
`