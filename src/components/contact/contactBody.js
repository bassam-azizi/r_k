import React from 'react'

import Styled from '@emotion/styled'

import Form from './form'
import Info from './info'
import SocialMedia from './socialMedia'

const Wrapper = Styled.div`

    .container{
        display: flex;
        flex-direction: row-reverse;
        width: 80%;
        margin: 115px auto;

        @media (max-width: 1232px){
            width: 90%;
        }

        @media (max-width: 900px){
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            margin-top: 170px;
        }
    }
    .smWrapper{
        width: 420px;
        margin: 0 auto 22px;
    }
`


const ContactBody = () =>{
    return(
        <Wrapper>
            <div className="container">
                <Info />
                <Form />
            </div>
            <div className="smWrapper">
                <SocialMedia />
            </div>
        </Wrapper>

    )
}

export default ContactBody