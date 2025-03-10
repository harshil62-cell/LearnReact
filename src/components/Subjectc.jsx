import React,{useContext} from 'react'
import { subjectContext } from './Contextapi'

function Subjectc() {
    const subject=useContext(subjectContext)//hook used for using context
  return (
    <div style={{backgroundColor:"green",border:"3px solid black",padding:"10px"}}>
        <h1>Subject is {subject}</h1>
    </div>
  )
}

export default Subjectc