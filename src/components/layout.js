import React from 'react'

import '../styles/reset.scss'
import Styled from '@emotion/styled'


import Header from './header/header'
import Footer from './footer'


const Meta_container = Styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`
const Wrapper = Styled.div`
  flex-grow: 1;
`
// const Body_Wrapper = Styled.div`
//     color: #222;
// `
const Layout = props =>{
    return(
        <Meta_container>
            <Wrapper>
                <Header />
                {/* <Body_Wrapper> */}
                    {props.children}
                {/* </Body_Wrapper> */}
            </Wrapper>
            <Footer />
        </Meta_container>
    )
}

export default Layout