import Styled from '@emotion/styled'
import { GoTriangleRight } from 'react-icons/all'
import { IoMdPause } from 'react-icons/all'

export const Wrapper = Styled.div`
            margin: auto;
            align-self: center;
            position: relative;
            z-index: 10;

            
            @media (max-width: 1028px){
                margin: 121px auto 97px;
            }
            `
export const H1 = Styled.h1`
        margin-bottom: 30px;
        font-size: 40px;
        font-weight: 300;
        color: #373737;

            span{
                color: #7F8A64;
                font-style: italic;
            }
`
export const Button = Styled.button`
        z-index: 20;
        overflow: hidden;
        position: relative;
        width: ${(props) => (props.cast ? '71px' : '330px')};
        height: 71px;
        background: ${(props) => (props.cast ? '#C52127' : '#C52127')};
        border-radius: ${(props) => (props.cast ? "50%" : "10px")};
        box-shadow: ${(props) => (props.cast? 'none' : '0px 8px 15px rgba(0, 0, 0, 0.1)')};
        color: #fff;
        cursor: pointer;
        border: ${(props)=> (props.cast? 'none' : '1px solid #c5c5c5')};
        transform: ${(props) => (props.cast ? 'translateY(-7px)' : 'translateY(-.1px)')} ;
        transition: ${(props)=>(props.cast? 'border-radius .7s linear, width .1s linear' : 'border-radius .1s linear, width .5s linear ')};
        &:hover{
            box-shadow: ${(props) =>(props.cast? 'none' : '0px 15px 20px rgba(127, 138, 100, 0.4)')};
            transform: translateY(-7px);
        }
        :focus{
            outline: none;
        }
            p{
                text-indent: ${(props) => ( props.cast? '0':'15px')};
                line-height: ${(props) =>( props.cast? '0' : '36px')};
                font-weight: 600;
                font-size: 24px;
                text-align: ${(props) => (props.cast? 'default' : 'left')};
                opacity: ${(props) =>(props.cast? '0' : '1')};
                visibility: ${(props) => (props.cast? 'hidden':'visible')};
                // transform: ${(props)=>(props.cast? 'translateY(-11em)' : 'translateY(0)')};
                position: absolute;
                top: 23%;
                transition:  ${(props)=>(props.cast? 'opacity: .1s ease, visibility .1s ease':'opacity .2s ease .3s , visibility .9s ease')};
            }
    `
    
export const Icon = Styled(GoTriangleRight)`
        box-sizing: content-box;
        position: absolute;
        right: -50px;
        top: 5px;
        font-size: 30px;
        color: #fff;
    `
export const Pauseicon = Styled(IoMdPause)`
        box-sizing: content-box;
        font-size: 30px;
        color: #fff;
        opacity: ${(props) =>(props.cast? '1' : '0')};
        visibility: ${(props) => (props.cast? 'visible' :'hidden')};
        transition:  ${(props)=>(props.cast? 'opacity: .1s ease, visibility .1s ease':'opacity .2s ease .3s , visibility .3s ease')};

    `
export const P = Styled.p`
        font-size: 14px;
        line-height: 60px;
        color: #373737;
        font-weight: 200;
        text-align: left;
        display: ${(props) => (props.cast ? 'none' : 'block')};
        align-self: stretch;
        text-transform: capitalize;
    `