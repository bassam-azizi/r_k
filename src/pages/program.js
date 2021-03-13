import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

import Schedule from '../components/schedule/schedule'



const Program = () =>{
    return (
        <Layout> 
        	<Head title="Our Schedule" />
            <Schedule />
        </Layout>
    )
}

export default Program