import React from 'react'
import { Link } from 'gatsby'


import Styled from '@emotion/styled'

import Layout from '../components/layout'
import Head from '../components/head'



const Wrapper = Styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 60vh;

	h4{
		color: #333;
	}

	h2 a{
		text-decoration: none;
		color: #7F8A64;
	}
	
`

const NotFound = () =>{
	return(
		<Layout>
        	<Head title="404 page not found" />
			<Wrapper>
				<h4>The page requested does not exist in this website</h4>
				<h2><Link to="/">Head Home</Link></h2>
			</Wrapper>
		</Layout>
		)
}

export default NotFound