import Styled from '@emotion/styled'

export const Wrapper = Styled.nav `
        width: 100%;
        // background: #11ff1f09;
        background: #F6F7F488;
        padding: 28px 0 0;
        z-index: 10;

        @media (max-width: 1028px){
            padding: 28px 0;
        }
        @media (max-width: 768px){
            padding: 28px 0 46px;
        }
        `
export const Container = Styled.div `
        max-width: 1320px;
        margin: 0 auto 28px;
        padding: 0 27px;
        height: 104px;
        display: flex;
        justify-content: space-between;
        position: relative;
        align-items: center;

        @media (max-width: 1188px){
                padding : 0 20px;
        }
        @media (max-width: 916px){
                flex-direction: column;
                align-items: flex-start;
                width: 700px;
        }
        @media (max-width: 768px){
            padding: 0; 
            position: static;
            width: 100%;
        }
    `
export const Hamburger = Styled.div `
        position: fixed;
        top: 2em;
        right: 2em;
        display:  none;
        background-color: #111;
        width: 30px;
        height: 3px;
        transition: all .3s linear;
        align-self: center;
        position: relative;
        transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

        @media (max-width: 768px){
            display: block;
        }
        `