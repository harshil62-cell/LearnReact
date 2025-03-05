import React, { useEffect } from 'react'

function Counter({count,data}) {
    const handleCounter=()=>{
        console.log("handle counter called")
        //now when in parent component state changes this will again be called 
        //multiple times which is undesirable this is called sideeffect from outside of component
    }
    //therefore we will use useEffect again here
    //handleCounter();
function data1(){
    console.log("data called");
    //now we want to call this function whenever data props is updated
    //and not when either count or data is updated
    //to achieve that we will use below syntax
}

    useEffect(()=>{
        handleCounter()
    },[])

    useEffect(()=>{
        data1();
    },[data]) // now data() will only be called when data prop will be updated
  return (
    <div>
        <h1>Counter component {count}</h1>
        <h1>Data:{data}</h1>
    </div>
  )
}

export default Counter