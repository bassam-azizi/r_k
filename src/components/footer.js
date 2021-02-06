import React from 'react'
import { Container , P} from './footerStyle'

const Footer = () =>{
    return(
        <Container>
            <div>
                <P>contact@radiokhemir.fr</P>
                <P>made with <span style={{color: '#C52127'}}>♥</span> by Bassem Azizi</P>
                <P>All right are reserved</P>
            </div>
        </Container>
    )
}

export default Footer