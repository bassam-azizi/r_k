import React from 'react'

import styled from '@emotion/styled'


const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between ;
    align-items: center;
    height: 50px;
    padding: 0 4.5rem;
    margin: 0;
    background-color: #373737;
    color: #FFF;
    font-size: 14px;
`
const FooterP = styled.div`
    margin: 0;  
`

const Footer = () =>{
    return(
        <Container>
            <FooterP>contact@radiokhemir.fr</FooterP>
            <FooterP>made with <span style={{color: '#C52127'}}>♥</span> by Bassem Azizi</FooterP>
            <FooterP>All right are reserved</FooterP>
        </Container>
    )
}

export default Footer