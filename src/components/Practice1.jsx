import React from 'react'

function callFunc(){
    alert("Button clicked")
}

function Practice1() {
  return (
    <div>
        <h1>My ToDos</h1>
        <ul>
            <li>Learn React</li>
            <li>Learn Advanced Js</li>
            <li>Learn DSA</li>
        </ul>
        <button onClick={callFunc}>Click Me</button>
    </div>
  )
}

export default Practice1