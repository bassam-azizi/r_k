import React from 'react'

import Styled from '@emotion/styled'



const Wrapper = Styled.div`
    display: flex;
    flex-direction: row;
    padding: 6px;
`
const LeftColumn = Styled.div`
    width: 65%;
    p{
        letter-spacing: 0.2px;
        line-height: 2.5;
        padding: 0 19px; 
    }
    padding: 7px;
`
const H1 = Styled.h1`
    line-height: 3;
    font-weight: 400;
    padding-left: 12px;
`
const Li = Styled.li`
    line-height: 4;
    letter-spacing: 0.2px;
    padding-left: 4rem;
`
const Separator = Styled.div`
    width: 1px;
    height: 100vh;
    background-color: #c1c1c1;
    align-self: center;
`

const Aboutus = () =>{
    return(
        <Wrapper>
            <LeftColumn>
                <H1>Radio Khemir</H1>
                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
                    graphic or web designs. The passage is attributed
                    to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum 
                    et Malorum for use in a type specimen book.</p>
                <H1>Association Femme pour development</H1>
                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                    The passage is attributed to an unknown typesetter in the 
                    15th century who is thought to have scrambled parts 
                    of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
            </LeftColumn>
            <Separator />
            <div>
                <H1>Our Team</H1>
                <ul>
                    <Li>Henia Ochi : President et CEO</Li>
                    <Li>ٌRajaa Homrani : Assistant et Animateur</Li>
                    <Li>Rami Zaghdoudi : Animateur et DDJ</Li>
                    <Li>Ilhem boughnaia : Animateur</Li>
                    <Li>Hend Azizi : Animateur</Li>
                    <Li>Amina Trabelsi : Animateur</Li>
                    <Li>Fedi Arfaoui : Animateur et Coach</Li>
                </ul>
            </div>
        </Wrapper>
    )
}

export default Aboutus