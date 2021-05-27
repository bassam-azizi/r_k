import React from 'react'

import GlobalStyle from '../styles/global'
import Styled from '@emotion/styled'


import Header from './header/header'
import Footer from './footer'


const MetaContainer = Styled.div`
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
            <GlobalStyle />
            <MetaContainer>
                <Wrapper>
                    <Header location={props.location}/>
                    {props.children}
                </Wrapper>
                <Footer />
            </MetaContainer>
        </>
    )
}

export default Layout