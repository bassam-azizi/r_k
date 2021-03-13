import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

import Contact_Body from '../components/contact/contactBody'

const Contact = () =>{
    return(
        <Layout>
        	<Head title="Contact us" />
            <Contact_Body />
        </Layout>
    )
}

export default Contact