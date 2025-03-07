import React, { useActionState } from 'react'
//used to handle forms easily in react
//it updates state based on the result of a form action
function Useactionstatehook() {
    const handleSubmit=async(previousData,formData)=>{ //this will have two parameters
        let name=formData.get('name');
        let password=formData.get('password');
        await new Promise(res=>setTimeout(res,2000))
        console.log("handle submit called",name,password);
        if(name && password){
            return {message:'data submitted'}
        }else{
            return {error:'fill in the details'}
        }
    }
    const[data,action,pending]=useActionState(handleSubmit,undefined)//it takes two values initial value of data and function for action
    //we can store all data of the form in data statevariable - on this only we put validations
    //action is fn which will be passed in html as attribute
    //pending-form submit hua ya nahi hua status
  return (
    <div>
        <h1>Use action state demo</h1>
        <form style={{marginLeft:"10px",border:"3px solid red",padding:"5px"}} action={action}>
            <input type="text" placeholder="enter name" name="name"></input>
            <br/><br/>
            <input  type="password" placeholder="enter password" name="password"></input>
            <br/><br/>
            <button style={{border:"3px solid white",borderRadius:"5px"}} disabled={pending}>Submit</button>
            {
                data?.error && <span>{data?.error}</span>
            }
            {
                data?.message && <span>{data?.message}</span>
            }
        </form>
    </div>
  )
}

export default Useactionstatehook