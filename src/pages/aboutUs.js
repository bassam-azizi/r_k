import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

import Aboutus from '../components/aboutUs/aboutBody'


const AboutUs = () =>{
    return(
        <Layout>
        	<Head title="About us" />
            <Aboutus />
        </Layout> 
    )
}

export default AboutUs