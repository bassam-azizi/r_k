import React from 'react'
import { Wrapper } from './aboutStyle'



const Aboutus = () =>{
    return(
        <Wrapper>
            <div className="about">
                <h1 className="title">Radio Khemir</h1>
                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
                    graphic or web designs. The passage is attributed
                    to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum 
                    et Malorum for use in a type specimen book.</p>
                <div className="association">       
                    <h1 className="title">Association Femme pour development</h1>
                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                        The passage is attributed to an unknown typesetter in the 
                        15th century who is thought to have scrambled parts 
                        of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                </div>
            </div>
            <div className='team'>
                <h1 className="title">Our Team</h1>
                <ul>
                    <li>Henia Ochi : President et CEO</li>
                    <li>ٌRajaa Homrani : Assistant et Animateur</li>
                    <li>Rami Zaghdoudi : Animateur et DDJ</li>
                    <li>Ilhem boughnaia : Animateur</li>
                    <li>Hend Azizi : Animateur</li>
                    <li>Amina Trabelsi : Animateur</li>
                    <li>Fedi Arfaoui : Animateur et Coach</li>
                </ul>
            </div>
        </Wrapper>
    )
}

export default Aboutus