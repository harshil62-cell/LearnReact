import React,{useState} from 'react'

function Updateobjinstate() {
    const[data,setData]=useState({
        name:'harshil',
        address:{
            city:'valsad',
            country:'India'
        }
    })

    const handleName=(name)=>{
        data.name=name;
        setData({...data});//concept of shallow copy and deep copy
    }

    const handleCity=(city)=>{
        data.address.city=city;
        setData({...data,address:{...data.address,city}})
    }
  return (
    <div>
        <h1>Updating objects in state</h1>
        <input type="text" onChange={(event)=>handleName(event.target.value)}></input>
        <br/>
        <input type="text" onChange={(event)=>handleCity(event.target.value)}></input>
        <br/>
        <h2>Name: {data.name}</h2>
        <h2>City: {data.address.city}</h2>

    </div>
  )
}

export default Updateobjinstate