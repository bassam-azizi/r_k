import React from 'react'
import { Wrapper, Adress, H1, Sponsored} from '@emotion/styled'


const Info = () =>{
    return(
        <Wrapper>
            <Adress>
                <H1>Radio Web Khemir</H1>
                <p>Radio Web Khmir _Maison des jeunes _Ain Draham_8730</p>
                <p>Tel:  00216 41 425 865</p>
                <p>Fax: 00216 71 428 965</p>
            </Adress>
            <Sponsored>
            <p>Fondeé par L’association</p>
            <p>Femme Pour Developpment AFPD</p>
            <p>Financeé par le GIZ</p>
            </Sponsored>
            </Wrapper>
    )
}

export default Info