import Styled from '@emotion/styled'
import { GoTriangleRight } from 'react-icons/all'
import { IoMdPause } from 'react-icons/all'

export const Wrapper = Styled.div`
            padding: 2rem;
            width: 390px;
            height: 380px;
            margin: auto;
            align-self: center;
            position: relative;
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
        width: ${(props) => (props.cast ? '71px' : '363px')};
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
                text-indent: ${(props) => ( props.cast? '0':'5px')};
                line-height: ${(props) =>( props.cast? '0' : '36px')};
                font-weight: 600;
                font-size: 24px;
                text-align: ${(props) => (props.cast? 'default' : 'left')};
                opacity: ${(props) =>(props.cast? '0' : '1')};
                visibility: ${(props) => (props.cast? 'hidden':'visible')};
                // transform: ${(props)=>(props.cast? 'translateY(-11em)' : 'translateY(0)')};
                position: absolute;
                top: 23%;
                transition:  ${(props)=>(props.cast? 'opacity: .1s ease, visibility .1s ease':'opacity .2s ease .3s , visibility .3s ease')};
            }
    `
    // div{
    //     width: 70px;
    //     height: 70px;
    //     background-color: #C52127;
    //     border-radius: 50%;
    //     position: absolute;
    //     right: 1.9rem;
    //     // top: 32.5%;
    //     display: flex;
//     justify-content: center;
//     align-items: center;
// }
export const Icon = Styled(GoTriangleRight)`
        box-sizing: content-box;
        position: absolute;
        right: 1.9rem;
        top: 26.5%;
        font-size: 2.09rem;
        color: #fff;
        padding: 0 1.2rem 0 0;
    `
export const Pauseicon = Styled(IoMdPause)`
        box-sizing: content-box;
        font-size: 1.70rem;
        color: #fff;
        // padding: 0 1.2rem 0 0;
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