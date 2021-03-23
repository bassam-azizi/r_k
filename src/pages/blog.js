import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'


import Bloga from '../components/blog/blogBody'

const Blog = () => {
    return (
        <Layout>
        	<Head title="Press" />
            <Bloga />
        </Layout>
    )
}

export default Blog