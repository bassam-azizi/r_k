import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

import Schedules_body from '../components/schedule/schedulesBody'



const Program = () =>{
    return (
        <Layout> 
        	<Head title="Our Schedule" />
            <Schedules_body />
        </Layout>
    )
}

export default Program