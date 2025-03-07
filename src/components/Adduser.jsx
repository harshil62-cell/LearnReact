import React from 'react'

function Adduser(props) {
    console.log(props.setUser);
    //this needs to be defined in parent component in order to pass to displayuser component const[user,setUser]=useState('')
  return (
    <div style={{border:"3px solid blue",margin:"10px"}}>
        <h1>Add user component</h1>
        <input type="text" onChange={(event)=>{props.setUser(event.target.value)}} placeholder="enter user name"></input>
    </div>
  )
}

export default Adduser