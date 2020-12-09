import React from 'react'

import styled from '@emotion/styled'


const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between ;
    padding: 0 2rem;
    margin: 0;
    background-color: red;
`
const FooterP = styled.div`
    margin: 0;  
`

const Footer = () =>{
    return(
        <Container>
            <FooterP>contact@radiokhemir.fr</FooterP>
            <FooterP>made with ♥ by Bassem Azizi</FooterP>
            <FooterP>All right are reserved</FooterP>
        </Container>
    )
}

export default Footer