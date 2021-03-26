import React, { useState } from 'react'
import Liveplayer from './livePlayer'
import { P , Pauseicon , Icon , Button , H1, Wrapper } from './ctaStyle' 
import Typical from 'react-typical'


const Cta = () => {
    const [cast, castOn] = useState(false);
    return (
        <Wrapper>
            <H1>We deliver{' '}
            <Typical 
            		steps={['News', 4000, 'Updates', 4000, 'Cultures', 4000, 'Business', 4000, 'Arts', 3500]}
            		loop={Infinity} 
            		wrapper='span'
            		/>
            </H1>
            <Button onClick={() => castOn(!cast)} name="cta" types="button" cast={cast}> <Pauseicon cast={cast}/>  <p>Launch Live Radio <Icon /> </p> </Button>
            <Liveplayer cast={cast} />
            <P cast={cast}>13h-14h One Hour Sport with Fedi Arfaoui</P>
        </Wrapper>
    )
}

export default Cta