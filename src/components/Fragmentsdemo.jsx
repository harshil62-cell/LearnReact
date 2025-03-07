import React, { Fragment } from 'react'
//it is a feature 
//it can be used as parent element but it wont generate any html element
//we know that while returning any html element we can only return single element
//as that element is nothing but an object of js so we cannot return two objects at a time
//hence fragments was introduced
//so to overcome it we were using div but it has disadvantage-it increases redundancy
//so we use Fragment as it does not return any html element redundancy is reduced 
//now instead of writing Fragment which is a long word we can directly use <></> empty tags 
function Fragmentsdemo() {
  return (
    <Fragment>
        <h1>hi</h1>
        <h1>Hello</h1>
    </Fragment>
  )
}

export default Fragmentsdemo
//Rules for hooks
//we can even create our own hooks in reactjs-custom hooks
//use prefix is used before starting hook name even for custom hook we need to follow the naming convention
//hooks should always be placed in top inside the component 
//hooks should not be placed inside of a conditional statements or any block as its scope will become limited
//do not use it inside loops
//do not use hooks in class components
//do not use it in try/catch/finally blocks
//dont call hooks from regular javascript functions
//we can call pre defined hooks in custom hooks as well
//while creating custom hook its name should not be contradicting with names of other function or variables
