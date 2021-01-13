import React from 'react'

import '../styles/reset.scss'
import layoutStyle from './layout.module.scss'


import Header from './header/header'
import Footer from './footer'

const Layout = props =>{
    return(
        <div className={layoutStyle.container}>
            <div className={layoutStyle.wrapper}>
                <Header />
                <div className={layoutStyle.main}>
                    {props.children}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout