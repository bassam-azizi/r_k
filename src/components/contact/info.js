import React from 'react'
import {  Wrapper } from './infoStyle'


const Info = () =>{
    return(
        <Wrapper>
            <div className="adress">
                <h1>Radio Web Khemir</h1>
                <p>Maison des jeunes, Ain Draham_8130</p>
                <p>Tel:  00216 41 425 865</p>
                <p>Fax: 00216 71 428 965</p>
            </div>
            <div className="sponsored">
                <p>Fondeé par L’association</p>
                <p><bold>Femme Pour Developpment AFPD</bold></p>
                <p>Financeé par le <bold>l'ambassade d'allemagne en tunisie</bold></p>
            </div>
        </Wrapper>
    )
}

export default Info