import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

import SchedulesBody from '../components/schedule/schedulesBody'



const Program = () =>{
    return (
        <Layout> 
        	<Head title="Our Schedule" />
            <SchedulesBody />
        </Layout>
    )
}

export default Program