import React, {useState, useEffect} from 'react'

import Styled from '@emotion/styled'

const Time = Styled.div`
    font-family:  Poppins;
    font-weight: 200;
    font-size: 14px;
    padding: 0 15px;
`

const Timer = () =>{
    const [date, currentTime] = useState(new Date())
    useEffect(()=>{
        const id = setInterval( () =>{
            currentTime(() => new Date())
        }, 1000);
        return () => clearInterval(id);
    });
        return (
            <Time>{date.toLocaleTimeString('it-IT')}</Time>
        )
}

export default Timer

