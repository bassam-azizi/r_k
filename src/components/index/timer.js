import React, {useState, useEffect} from 'react'

const Timer = () =>{
    const [date, currentTime] = useState(new Date())
    useEffect(()=>{
        const id = setInterval( () =>{
            currentTime(() => new Date())
        }, 1000);
        return () => clearInterval(id);
    }, []);
        return (
            date
        )
}

export default Timer

