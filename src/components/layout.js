import React from 'react'

// import '../styles/reset.scss'
import Global from '../styles/reset.scss'
import Styled from '@emotion/styled'


import Header from './header/header'
import Footer from './footer'


const Meta_container = Styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
    padding: 0;
`
const Wrapper = Styled.div`
  flex: 1 0 100vh;
`

const Layout = props =>{
    return(
        <>
            <Global />
            <Meta_container>
                <Wrapper>
                    <Header />
                    {props.children}
                </Wrapper>
                <Footer />
            </Meta_container>
        </>
    )
}

export default Layout