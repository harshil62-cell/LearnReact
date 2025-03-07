import React,{useState, useTransition} from 'react'
// normally when we click a button on websites we see a loader as it takes some time for Processing
// to deal with loaders and disabling button while processing we use this hook 
// the difference between useFormstatus hook and this is formstatus hook only works with form and this 
// works with any button
function UseTransitionhookdemo() {
    const[pending,startTransition]=useTransition();
    const handleButton=()=>{
        startTransition(async()=>{
            await new Promise(res=>setTimeout(res,2000));
        })//useTransition was introduced in react 18 but async was not supported now in react 19 it is supported
        
    } 
  return (
    <div>
        <h1>useTransition hook demo</h1>
        <button disabled={pending} onClick={handleButton} style={{border:"3px solid red",borderRadius:"5px"}}>Submit</button>
    </div>
  )
}
//Note - keep your components pure
//what is pure function in js
// A pure function in JavaScript is a function that always returns the same output for the same input. Pure functions are deterministic and don't have side effects. 
// Characteristics of pure functions

//     Deterministic: Pure functions always return the same output for the same input. 

// No side effects: Pure functions don't modify external state, like variables or objects outside the function. 
// Referential transparency: Pure functions can be replaced with their computed value without affecting the program's behavior
//what is pure component
//component which does not affect things outside of that component
//i.e to say varibales outside function/component if changed inside component will
//be called as impure component
//and if something comes to component it will only come through props and not directly

export default UseTransitionhookdemo