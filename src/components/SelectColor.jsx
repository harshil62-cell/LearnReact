import React,{useState} from 'react'
import ClockComponent from './ClockComponent'

function SelectColor() {
    const[color,setColor]=useState("green")
  return (
    <div>
        <span>Change color of the clock  </span>
        <select defaultValue={color} onChange={(event)=>{setColor(event.target.value)}}>
            <option value={"red"}>Red</option>
            <option value={"blue"}>Blue</option>
            <option value={"green"}>Green</option>
            <option value={"white"}>White</option>
        </select>

        <div>
            <ClockComponent color={color}/>
        </div>
    </div>
  )
}

export default SelectColor