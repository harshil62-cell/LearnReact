import { useState } from 'react'
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
// git reference for future-steps to commit to git repo 
// git add .
// git commit -m "Descriptive commit message"
// git push
function App() {
  let user={
    name:"Harshil",
    college:"SPIT"
  }

  const [count,setCount]=useState(0);
  const [data,setData]=useState(0);

  return (
    <div>
      <Counter count={count} data={data}/>
      <button onClick={()=>{setCount(count+1)}}>counter</button>
      <button onClick={()=>{setData(data+1)}}>Data</button>
    </div>
  )
}

export default App
