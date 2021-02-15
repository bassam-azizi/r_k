import React from 'react'
import { Container} from './footerStyle'

const Footer = () =>{
    return(
        <Container>
            <p className='footerItem contact'>contact@radiokhemir.fr</p>
            <div>
                <p className="footerItem firstItem">contact@radiokhemir.fr</p>
                <p className="footerItem">made with <span style={{color: '#C52127'}}>♥</span> by Bassem Azizi</p>
                <p className="footerItem">All right are reserved</p>
            </div> 
        </Container>
    )
}

export default Footer