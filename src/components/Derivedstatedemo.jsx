import React, { useState } from 'react'
//what is derived state?
//Derived state is a value that is calculated from an existing state or 
// property in a React component. It can be used to minimize duplication and keep an app's state consistent
//state that is calculated or derived from other state values or props within our component
//derived state can be a variable
//no need to create extra state only variables or constants are enough
//lesser the number of states lesser re rendering and improved performance

function Derivedstatedemo() {
const [users,setUsers]=useState([]);
const [user,setUser]=useState('');
const handleAddUsers=()=>{
    setUsers([...users,user]);
}
const total =users.length;//derived state
const last=users[users.length-1];//derived state
const unique=[...new Set(users)].length;//derived state
//here we are not creating state for each and only using variables
  return (
    <div>
        <h2>Total users: {total}</h2>
        <h2>Last user: {last} </h2>
        <h2>unique users: {unique} </h2>
        <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder="add new uer"/>
        <br/>
        <button onClick={handleAddUsers}>Add User</button>
        {
            users.map((item,index)=>(
                <h4 key={index}>{item}</h4>
            ))
        }
    </div>
  )
}

export default Derivedstatedemo