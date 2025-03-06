import React from 'react'

function Passfnsasprops(props) {
   
  return (
    <div>
        <button onClick={()=>{props.displayName()}}>Display user</button>
        <p>We do this in order to avoid code redundancy</p>
    </div>
  )
}

export default Passfnsasprops