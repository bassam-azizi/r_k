import Styled from '@emotion/styled'

export const Wrapper = Styled.div`
    display: flex;
    opacity: ${(props) => (props.cast? "1" : "0")};
    visibility: ${(props) => (props.cast? "visible" : "hidden")};
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    left: 84px;
    top: 62px;
    transition: ${(props)=>(props.cast? 'opacity 1.4s linear 1s' : 'opacity .1s linear')};

    @media (max-width: 1276px){
        left: 44px;
    }
    @media (max-width: 1100px){
        left: 33px;
    }
    @media  (max-width: 500px){
        left: 83px;
    }

    
`


export const ProgressBar = Styled.div`
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
    justify-content: space-between;
    align-items: center;
    color: #fff;
    
    @media (max-width: 1276px){
        width: 239px;
    }

    @media (max-width:500px){
        width: 230px;
    }
    @media (max-width:360px){
        width: 160px;
    }
`
export const Bar = Styled.div`
    height: 2px;
    background-color: #fff;
    width: ${(props) => (props.cast? "68%" : "2%")};
    transition: width 3s linear ;
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
    width: 289px;

    @media (max-width: 1276px){
        padding: 10px 0 0 50px;
        line-height: 1.6;
        text-align: unset;
        span{
            display: block;
        }
    }
    @media (max-width:500px){
        display: none;
    }
`