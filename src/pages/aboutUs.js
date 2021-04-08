import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

import Aboutus from '../components/aboutUs/aboutBody'


const AboutUs = ({location}) =>{
    return(
        <Layout location={location}>
        	<Head title="About us" />
        	{console.log(location)}
            <Aboutus />
        </Layout> 
    )
}

export default AboutUs