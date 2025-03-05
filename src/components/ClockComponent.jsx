import React, { useEffect, useState } from 'react'
import SelectColor from './SelectColor';

function ClockComponent({color}) {
    const [time,setTime]=useState(0);
    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString())
        },1000)
    },[])
  return (

    <div>
        <h1>Default Props in React js</h1>
        <h1 style={{color:color,background:"black",border:"3px solid white",padding:"2px",borderRadius:"10px",width:"400px"}}>{time}</h1>
    </div>
  )
}

export default ClockComponent