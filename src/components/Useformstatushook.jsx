import React from 'react'
import {useFormStatus} from 'react-dom'

function Useformstatushook() {
const handleSubmit=async ()=>{
  await new Promise(res=>setTimeout(res,2000));
  console.log("submit");
}
 function Customform(){
  const{pending}=useFormStatus();
  console.log(pending);
  return(
    <div>
      <input type="text" placeholder="enter name"></input>
                <br/><br/>
      <input type="password" placeholder="enter password"></input>
                <br></br>
      <button disabled={pending}>{pending?'Submitting...':'submit'}</button>
    </div>
  )
 }
  return (
    <div>
        {/* <p>useFormstatus is a hook which returns state true or false<br/> 
            tells us about whether form is submitted or not we disable the submit button while form is being submitted</p> */}
            <h1>useform status hook demo</h1>
            <form action={handleSubmit}>
                <Customform/>
            </form>
    </div>
  )
}

export default Useformstatushook