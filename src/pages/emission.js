import React from 'react'

import EpisodesBody from '../components/episodes/episodesBody'

import Layout from '../components/layout'
import Head from '../components/head'




const Emission = () =>{
	// const url = typeof window !== 'undefined' ? window.location.path : '/emission';
    return (
        <Layout>
      		<Head title="past emission"></Head>
            <EpisodesBody  />
        </Layout>

    )
}

export default Emission
