import React from 'react'
import useToggle from './useToggle'
//
function Customhook() {
    const[val,setVal]=useToggle(true)
   
  return (
    <div>
        <button onClick={setVal}>Toogle heading</button>
        {
            val? <h1>custom hook</h1>:null
        }
    </div>
  )
}

export default Customhook