import React, { useState } from 'react'
import Adduser from './Adduser'
import Displayuser from './Displayuser'
//What is lifting state up
//when we want to share data from one component
//to next using state it is known as lifting state up
//when we want to send state from one component to another which is on same level we 
//first send it to parent component and then to component where it is intended
//this is known as lifting state up as we need to define state in parent component for this to happen
//it is also known as sharing state between components
//for example consider this as parent component
function Liftingstateup() {
    const[user,setUser]=useState('');
  return (
    <div>
        {/**two components will be defined to demonstrate one is add user another display user */}
        <Adduser setuser={setUser}/>
        <Displayuser user={user}/>
    </div>
  )
}

export default Liftingstateup