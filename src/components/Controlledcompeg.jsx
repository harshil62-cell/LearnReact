import React, { useState } from 'react'
//a controlled component is a form whose input field value is controlled by Reacts state
function Controlledcompeg() {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
  return (
    <div>
       <h1>Controlled Component eg</h1>
       <form action="" method="get">
        <input type="text" value={name} placeholder="name" onChange={(event)=>{setName(event.target.value)}}></input>
        <br></br>
        <input type="email" value={email} placeholder="email" onChange={(event)=>{setEmail(event.target.value)}}></input>
        <br></br>
        <input type="password" value={password} placeholder="password" onChange={(event)=>{setPassword(event.target.value)}}></input>
        <br></br>
        <button>Submit</button>
       </form>
       <h3>{name}</h3>
       <h3>{email}</h3>
       <h3>{password}</h3>
    </div>
  )
}

export default Controlledcompeg