import React from "react";


function User(props) {
  return (
    <div>
        <h1>{props.user.name}</h1>
        <h1>{props.user.college}</h1>
    </div>
  )
}

export default User