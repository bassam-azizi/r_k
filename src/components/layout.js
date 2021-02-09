import React from 'react'

import Global_style from '../styles/global'
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
            <Global_style />
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