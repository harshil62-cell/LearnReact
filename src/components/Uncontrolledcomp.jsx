import React from 'react'

function Uncontrolledcomp() {

    const handleForm=(event)=>{
        event.preventDefault();
        const user=document.querySelector("#user").value;
        console.log(user);
    }
  return (
    <div>Uncontrolledcomp
        What is uncontrolled component?
        in controlled component every value of input field or such things
        is controlled by state wheares in uncontrolled component
        there is no role of state we use DOM object or useRef hook to get input field value or many other such things
        <br/>
        <form onSubmit={handleForm}>
        <input type="text" id="user"></input>
        <br/><br/>
        <input type="password" id="password"></input>
        <button>Submit</button>
        </form>
    </div>
  )
}

export default Uncontrolledcomp