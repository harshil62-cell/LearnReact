import React, { createContext, useState } from 'react'
import College from './College';
import Classcomp from './Classcomp';
//assume a scenario where we have a college component inside we have class component
//inside class component we have student component 
//inside student we have subject component suppose we want to send data from college to subject comp
//if we use props for it(which is known as props drilling) . performance and efficiency of our app will get reduced
//so we should not use props for it 
//we should use context api - which enables us to send data directly from college comp to subject comp
//without props drilling
//there are 3 major parts to it
//create context-to initialise context api
//provider-used for updating or providing data
//useContext-get data from context api
//assuming this as parent component we will create our own demo
export const subjectContext=createContext("Maths");
function Contextapi() {

    const[subject,setSubject]=useState("Maths");
    
  return (
    <div style={{backgroundColor:"yellow",border:"3px solid black",padding:"10px",marginLeft:"400px",width:"700px"}}>
        <select onChange={(event)=>setSubject(event.target.value)}>
            <option value="Maths">Maths</option>
            <option value="History">History</option>
            <option value="English">English</option>
        </select>
        <h1>Context API</h1>
        <subjectContext.Provider value={subject}>        
            <College/>
            </subjectContext.Provider>

    </div>
  )
}

export default Contextapi