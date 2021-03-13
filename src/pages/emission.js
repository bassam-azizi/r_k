import React from 'react'

import Episodes from '../components/episodes/episodesBody'

import Layout from '../components/layout'
import Head from '../components/head'



const Emission = () =>{
    return (
        <Layout>
        	<Head title="Past emission" location={window.location}/>
            <Episodes  />
        </Layout>

    )
}

export default Emission
