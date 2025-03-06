import React, { forwardRef } from 'react'

function Forwardreflearn({reference}) {
  return (
    <div>Forwardreflearn
        <h1>sending ref from one component to another is known as forward ref</h1>
        <h1>our input field may be in one component and reference may be in another</h1>
        parent-child forwarding
        <div>
            <input type="text" ref={reference}></input>
            
        </div>
    </div>
  )
}

export default Forwardreflearn