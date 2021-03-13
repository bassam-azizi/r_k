import React from "react"

import Layout from '../components/layout'
import Head from '../components/head'

import IndexBody from '../components/index/indexBody'


const Home = () =>{
  return(
    <Layout>
        <Head title="Home" />
      	<IndexBody />
    </Layout>
  )
}
export default Home
