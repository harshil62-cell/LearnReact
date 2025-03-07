import React, { useId } from 'react'
//useid hook is used for generating unique ids const id=useId()
//below is its usage
//do not use it in key prop
function Useidhook() {
    const name=useId();
  return (
    <div>
        <h1>{name}</h1>
        <label htmlFor={name}>name</label>
        <input id={name} type="text"></input>
    </div>
  )
}

export default Useidhook