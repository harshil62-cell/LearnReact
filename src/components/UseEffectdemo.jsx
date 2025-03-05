import React, { useEffect, useState } from 'react'

function UseEffectdemo() {


    function callOnce(){
        console.log("function called")
    }
    const[count,setCount]=useState(0);

    useEffect(()=>{
        callOnce();
    },[])//useEffect takes two arguments one is function and other its dependencies (state or props)
    //callOnce();//despite this function being called once
    //it will be called multiple times 
    //why?
    //because react re renders component every time state is being updated and making that function call again
    //this is nothing but called as side effect-which will degrade performance of our application
    //to overcome this we use useSideEffect hook in functional component
    //whatever we write in useEffect it will only be called once thereby improving performance
  return (
    <div>UseEffectdemo
        <h1>{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Counter</button>
    </div>
  )
}

export default UseEffectdemo