import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

import ContactBody from '../components/contact/contactBody'

const Contact = () =>{
    return(
        <Layout>
        	<Head title="Contact us" />
            <ContactBody />
        </Layout>
    )
}

export default Contact