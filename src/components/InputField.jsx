import React, { useState } from 'react'

function InputField() {
    const[val,setVal]=useState("");

    return (
    
    <div>
        <h1>Input Field practice</h1>
        <label for="input1">Write your name</label>
        <input type="text" id="input1" value={val} onChange={(event)=>{setVal(event.target.value)}}></input>
        <h2>{val}</h2>
        <button onClick={()=>{setVal("")}}>Clear</button>
    </div>
  )
}

export default InputField