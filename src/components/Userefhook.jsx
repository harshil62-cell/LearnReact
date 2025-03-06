import React from 'react'
import {useRef} from 'react'
function Userefhook() {
    const inputRef=useRef(null);
    const inputHandler=()=>{
        console.log(inputRef);
        inputRef.current.focus();
    }
  return (
    <div>
        <p>useRef hook is used with input field</p>
        <p>Whenever we use useRef hook with input field the reference of input field</p>
        <p>will be passed to useRef hook thereby we can control it using the hook</p>
        <input ref={inputRef} type="text" placeholder="enter user name"></input>
        <button onClick={inputHandler} >Focus on input field</button>
        //react recommends not to directly manipulate the dom but instead use states 
        we should not use useRef hook to manipulate dom directly
        
    </div>
  )
}

export default Userefhook