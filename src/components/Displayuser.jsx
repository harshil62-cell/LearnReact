import React from 'react'

function Displayuser({user}) {
  return (
    <div style={{border:"3px solid red",margin:"5px"}}>
        <h1>Display user component</h1>
        <h1>{user}</h1>
    </div>
  )
}

export default Displayuser