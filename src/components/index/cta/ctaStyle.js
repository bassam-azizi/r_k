import Styled from '@emotion/styled'
import { GoTriangleRight } from 'react-icons/go'
import { IoMdPause } from 'react-icons/io'

export const Wrapper = Styled.div`
            grid-column: 2 / 4;
            margin: auto;
            align-self: center;
            position: relative;
            z-index: 10;

            width: 300px;
            height: 215px;

            
            @media (max-width: 1028px){
                margin: 140px 0 0;
                grid-column: 2/-1;
                display: grid;
                width: auto;
            }
            @media (max-width: 768px){
                grid-column: 1/-1;
            }

            @media (max-width:470px){
                margin: 191px 0 0 40px;
            }
            @media (max-width: 370px){
                margin: 191px 0 0 28px;
            }
            `
export const Container = Styled.div`
    position: relative;
    display: grid;

    // @media (max-width: 1028px){
    //     justify-self: ${({cast}) => (cast? "auto" : "center") };
    //     // grid-column: ${({cast}) => (cast? "2/ span 2" : "unset" ) };
    // }
    @media (max-width: 768px) {
        justify-self: ${({locale}) => (locale !== "en") ? "unset" : "center" };
        display: ${({locale}) => (locale !== "en" ? "grid" : "unset" ) };
    }
    @media (max-width: 470px){
        grid-column:1/-1;
        justify-self: unset;
    }
`
export const H1 = Styled.h1`
        position: absolute;
        bottom: ${ ({cast}) => cast? "117px" : "164px"};
        width: 420px;
        font-size: ${ ({locale}) => locale==='ar' ? "46px" : "36px" } ;
        font-weight: 290;
        color: #373737;
        font-family: ${({locale}) => locale === "ar" ? "Almarai" : "Poppins"};
        direction: ${({locale}) => locale === "ar" ? "rtl" : "ltr"};
        right: ${({locale}) => locale === "ar" ? "0" : "auto"};

        span{
            font-size: ${ ({locale}) => locale==='ar' ? "46px" : "32px" } ;
            display: ${ ({locale}) => locale==="fr" ? 'inline' : 'block'};
        }
        h3{
            display: ${({locale}) => ( locale === "fr" ? "block" : "inline")};
            font-size: ${ ({locale}) => locale==='ar' ? "50px" : "40px" } ;
            background: linear-gradient( 180deg, #8A6D63, #7f8a64);
            background-clip: text;
            text-fill-color: transparent;
            color: #7f8a64;
        }

        .styles_typicalWrapper__1_Uvh::after{
            content:"";
        }


            
        @media (max-width: 1330px){
            .span{
                display: block;
            }
        }
        @media (max-width: 1100px){
            font-size: 36px;
        }
        @media (max-width: 1028px){
            bottom: 164px;
            line-height: ${ ({locale}) => (locale==="en")? "unset" : "1.8"} ;
            font-size: 40px;
            width: 100%;
            span{
                display: inline;
                font-style: italic;
            }
        }
        @media (max-width: 768px){
            bottom: ${ ({locale}) => (locale==="en")? "160px" : "224px"} ;
            line-height: 1.6;
            font-size: 40px;
            width: auto;
            justify-self: center;
            span{
                display: ${ ({locale}) => (locale==="en")? "inline" : "block"} ;
                position: absolute;
            }
        }

        @media (max-width: 580px){
            bottom: 218px;
            span{
                display: block;
            }
        }
        @media (max-width: 470px){
            justify-self: unset;
        }
        @media (max-width: 370px){
            font-size: 36px;
        }
`

export const BtnWrapper = Styled.div`
        position: relative;
        justify-self: center;
        @media (max-width: 470px){
            justify-self: unset;
        }
`
    // width of button: 280 !::::! p svg transform(180deg) / right 202
export const Button = Styled.button`
        margin-top: 84px;
        z-index: 20;
        overflow: hidden;
        position: relative;
        width: ${({cast,locale}) => (cast ? '71px' : (locale==='ar'? '286px' : '330px'))};
        height: 71px;
        background: ${({cast}) => (cast ? '#C52127' : '#C52127')};
        border-radius: ${({cast}) => (cast ? "50%" : "10px")};
        box-shadow: ${({cast}) => (cast? 'none' : '0px 8px 15px rgba(0, 0, 0, 0.1)')};
        color: #fff;
        cursor: pointer;
        border: ${({cast})=> (cast? 'none' : '1px solid #c5c5c5')};
        transform: ${({cast}) => (cast ? 'translateY(-7px)' : 'translateY(-.1px)')} ;
        transition: ${({cast})=>(cast? 'border-radius .7s linear, width .1s linear' : 'border-radius .1s linear, width .5s linear ')};
        margin-right: ${({cast}) => (cast? "280px" : "unset")} ;
        @media (max-width: 1120px){
            width: ${({cast}) => (cast ? '71px' : '290px')};
        }
        @media (max-width: 900px){
            width: ${({cast}) => (cast ? '71px' : '290px')};
            margin-right: ${({cast}) => (cast? "230px" : "unset")} ;
        }
        
        @media (max-width: 430px){
            width: ${({cast}) => (cast ? '71px' : '265px')};
            margin-right: ${({cast}) => (cast? "170px" : "unset")} ;
        }
        @media (max-width: 315px){
            width: ${({cast}) => (cast ? '71px' : '245px')};
        }

        &:hover{
            box-shadow: ${({cast}) =>(cast? 'none' : '0px 15px 20px rgba(127, 138, 100, 0.4)')};
            transform: translateY(-7px);
        }
        :focus{
            outline: none;
        }
            p{
                right: ${({locale}) => ( locale === "ar" ? "17px" : "auto")};
                font-family: ${({locale}) => (locale === "ar" ? "Almarai" : "Poppins")};
                direction: ${({locale}) => (locale === "ar" ? "rtl" : "ltr")};
                text-indent: ${({cast}) => ( cast? '0':'15px')};
                line-height: ${({cast}) =>( cast? '0' : '36px')};
                font-weight: 600;
                font-size: 24px;
                text-align: ${({cast}) => (cast? 'default' : 'left')};
                opacity: ${({cast}) =>(cast? '0' : '1')};
                visibility: ${({cast}) => (cast? 'hidden':'visible')};
                // transform: ${({cast})=>(cast? 'translateY(-11em)' : 'translateY(0)')};
                position: absolute;
                top: 23%;
                transition:  ${({cast})=>(cast? 'opacity: .1s ease, visibility .1s ease':'opacity .2s ease .3s , visibility .9s ease')}; 
            }
    `
export const Icon = Styled(GoTriangleRight)`
        box-sizing: content-box;
        position: absolute;
        right: ${({locale}) => ( locale === "ar" ? "202px" : "-50px")};
        transform: ${({locale}) => ( locale === "ar" ? "rotate(180deg)" : "unset")};
        top: 5px;
        font-size: 30px;
        color: #fff;

        @media (max-width: 438px){
            display: none;
        }
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
        color: #373737;
        font-weight: 200;
        text-align: left;
        display: ${(props) => (props.cast ? 'none' : 'block')};
        align-self: stretch;
        text-transform: capitalize;
        padding-top: 15px;

        // @media (max-width: 350px){
        //     // width: 260px;
        //     padding-left: 23px;
        // }

        span{
            display:block;
        }
    `