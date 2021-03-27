import { createGlobalStyle } from 'styled-components'
import "@fontsource/poppins"
// import px2vw from '../utils/px2vw'

const Global_style = createGlobalStyle`
    
    html {
    box-sizing: border-box;
    font-family: "Poppins";
    font-style: normal;
    text-rendering: optimizeSpeed;
    outline: none;
    height: 100%;
    margin: 0;
    outline: none;
    }

    *,
    *:before,
    *:after {
    box-sizing: inherit;
    }

    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    a,
    ol,
    ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
    outline: none;
    }

    ol,
    ul {
    list-style: none;
    }

    img {
            max-width: 100%;
            height: auto;
    } 
    `

    export default Global_style