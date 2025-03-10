import React,{useEffect,useState} from 'react'

function Getusers() {
    const[userData,setUserData]=useState([]);
    useEffect(()=>{
        getData();
    },[])
    async function getData(){
        const url="https://dummyjson.com/users";
        let response=await fetch(url);
        response=await response.json();
        console.log(response);
        setUserData(response.users);
    }
  return (
    <div>
        <h1>fetch data from dummy api</h1>
        {
            userData && userData.map((user)=>(
                <>
                <h2>firstName: {user.firstName}</h2>
                <h2>lastName: {user.lastName}</h2>
                <h2>age: {user.age}</h2>
                </>
            ))
        }
    </div>
  )
}

export default Getusers