import React, { useState } from 'react'
import Liveplayer from './livePlayer'
import { P , Pauseicon , Icon , Button , H1, Wrapper } from './ctaStyle' 



const Cta = () => {
    const [cast, castOn] = useState(false)
    return (
        <Wrapper>
            <H1>We deliver <span>News</span></H1>
            <Button onClick={() => castOn(!cast)} name="cta" types="button" cast={cast}>{cast ? <Pauseicon /> : <Icon />}<p>Launch Live Radio</p></Button>
            <Liveplayer cast={cast} />
            <P cast={cast}>13h-14h One Hour Sport with Fedi Arfaoui</P>
        </Wrapper>
    )
}

export default Cta