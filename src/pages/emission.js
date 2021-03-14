import React from 'react'

import Episodes from '../components/episodes/episodesBody'

import Layout from '../components/layout'
import Head from '../components/head'



const Emission = () =>{
	const url = typeof window !== 'undefined' ? window.location.path : '/emission';
    return (
        <Layout>
        	<Head title="Past emission" location={url}/>
            <Episodes  />
        </Layout>

    )
}

export default Emission
