import Styled from '@emotion/styled'

export const Wrapper = Styled.nav `
        // background: #11ff1f09;
        // background: #F6F7F488;
        padding: 28px 0 0;
        z-index: 10;
        display: grid;
        grid-template-columns: repeat(12, 1fr);

        @media (max-width: 1100px){
            grid-template-columns: 50px repeat(12, 1fr) 50px;
            padding: 28px 0;
        }
        @media (max-width: 916px){
            grid-template-columns: 110px repeat(12, 1fr) 110px;
        }
        @media (max-width: 768px){
            grid-template-columns: 50px repeat(12, 1fr) 50px;
            padding: 28px 0 46px;
        }
        `
export const Container = Styled.div `
        width: 100%;
        grid-column: 2 / -2 ;
        // max-width: 1320px;
        margin-bottom: 28px;
        height: 104px;
        display: flex;
        justify-content: space-between;
        position: relative;
        align-items: center;
        

        @media (max-width: 1188px){
                // grid-column: 2 / -2 ;
                padding : 0 ;
        }
        @media (max-width: 916px){
                flex-direction: column;
                align-items: flex-start;
        }
        @media (max-width: 768px){
            grid-column: 2/ -2;
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