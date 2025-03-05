import React from 'react'
import { useState } from 'react'



function StateinR() {

    const [fruit,setFruit]=useState("apple");

function changeVal(){
    setFruit("Banana");
}
  return (
    <div>
        <h1>{fruit}</h1>
        <button onClick={changeVal}>Click to change name of fruit</button>
    </div>
  )
}

export default StateinR