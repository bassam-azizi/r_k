import React from 'react'
import { Global, css } from '@emotion/react'
import px2vw from './utils/px2vw'


const Global = 
        <Global style={css`
            :root {
                font-size: ${px2vw(24)};

                @media (min-width: 768px) {
                    font-size: ${px2vw(18)};
                }

                @media (min-width: 1024px) {
                    font-size: ${px2vw(16)};
                }
            }
            html {
            box-sizing: border-box;
            font-family: "Poppins";
            font-weight: 300;
            font-style: normal;
            text-rendering: optimizeSpeed;
            outline: none;
            height: 100%;
            margin: 0;
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
            ol,
            ul {
            margin: 0;
            padding: 0;
            font-weight: normal;
            }

            ol,
            ul {
            list-style: none;
            }

            img {
            max-width: 100%;
            height: auto;
            } 
    `} /> 


export default Global