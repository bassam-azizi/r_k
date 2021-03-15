import React from 'react'

import Episodes from '../components/episodes/episodesBody'

import Layout from '../components/layout'



const Emission = () =>{
	// const url = typeof window !== 'undefined' ? window.location.path : '/emission';
    return (
        <Layout>
            <Episodes  />
        </Layout>

    )
}

export default Emission
