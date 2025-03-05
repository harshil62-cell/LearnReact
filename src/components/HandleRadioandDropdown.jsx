import React, { useState } from 'react'

function HandleRadioandDropdown() {
    const [gender,setGender]=useState("female")
    const[ciity,setCity]=useState("Mumbai")
  return (
    <div>
        <h1>Handle Radio and Dropdown</h1>
        <h4>Select Gender</h4>
        <input type="radio" name="gender" checked={gender=="male"} onChange={(event)=>{setGender(event.target.value)}} id="male" value="male"/>
        <label htmlFor='male'>Male</label>
        <input type="radio" checked={gender=="female"} name="gender" id="female" onChange={(event)=>{setGender(event.target.value)}} value="female"/>
        <label htmlFor='female'>Female</label>
        <h2>{gender}</h2>
        <br></br><br></br>
        <select defaultValue={ciity} onChange={(event)=>{setCity(event.target.value)}}>
            <option value="Pune">Pune</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Ahmedabad">Ahmedabad</option>
        </select>
        <h2>Selected city:{ciity}</h2>
    </div>
  )
}

export default HandleRadioandDropdown