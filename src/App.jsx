import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Practice1 from './components/Practice1'
import Practice2 from './components/Practice2'
import StateinR from './components/StateinR'
import User from './components/User'
import InputField from './components/InputField'
import Controlledcompeg from './components/Controlledcompeg'
import HandleCheckBox from './components/HandleCheckBox'
import HandleRadioandDropdown from './components/HandleRadioandDropdown'
import Loopinjsx from './components/Loopinjsx'
import ClockComponent from './components/ClockComponent'
import SelectColor from './components/SelectColor'
import UseEffectdemo from './components/UseEffectdemo'
import Counter from './components/Counter'
import ComponentLifeCycle from './components/ComponentLifeCycle'
import Inlinestyle from './components/Inlinestyle'
import Cssmodule from './components/Cssmodule'
import Styledcomp from './components/Styledcomp'
import 'bootstrap/dist/css/bootstrap.min.css';
import Bootstrapboot from './components/Bootstrapboot'
import Userefhook from './components/Userefhook'
import Uncontrolledcomp from './components/Uncontrolledcomp'
import Passfnsasprops from './components/Passfnsasprops'
import Forwardreflearn from './components/Forwardreflearn'
// git reference for future-steps to commit to git repo 
// git add .
// git commit -m "Descriptive commit message"
// git push
function App() {
  const displayName=()=>{
    alert("display name function");
}
  let user={
    name:"Harshil",
    college:"SPIT"
  }

  const [count,setCount]=useState(0);
  const [data,setData]=useState(0);
  const inputRef=useRef(null);
  const updateInput=()=>{
    inputRef.current.value=1000;
    inputRef.current.focus();
  }

  return (
    <div>
      {/* <Counter count={count} data={data}/>
      <button onClick={()=>{setCount(count+1)}}>counter</button>
      <button onClick={()=>{setData(data+1)}}>Data</button> */}
      <h1>call parent function from child component</h1>
      {/* <Passfnsasprops/>
      <Passfnsasprops displayName={displayName}/> */}

      <Forwardreflearn reference={inputRef}/>
      <button onClick={updateInput}>click</button>
    </div>
  )
}

export default App
