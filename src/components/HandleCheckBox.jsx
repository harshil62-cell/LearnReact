import React,{useState} from 'react'

function HandleCheckBox() {
    const [skills,setSkills]=useState([]);
    const handleSkills=(event)=>{
        console.log(event.target.value,event.target.checked);
        if(event.target.checked==true){
            setSkills([...skills,event.target.value]);
        }else{
            setSkills([...skills.filter((x)=>{x!=event.target.value})])
        }
    }
  return (
    <div>
        <h1>Select your skills</h1>
        <input type="checkbox" id="skill1" value="PHP" onChange={handleSkills}></input>
        <label htmlFor="skill1">PHP</label>
        <br/>
        <input type="checkbox" id="skill2" value="Java" onChange={handleSkills}></input>
        <label htmlFor="skill2">Java</label>
        <br/>
        <input type="checkbox" id="skill3" value="JS" onChange={handleSkills}></input>
        <label htmlFor="skill3">JS</label>
        <h1>{skills.toString()}</h1>
    </div>
  )
}

export default HandleCheckBox