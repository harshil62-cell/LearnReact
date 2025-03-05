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
// git reference for future-steps to commit to git repo 
// git add .
// git commit -m "Descriptive commit message"
// git push
function App() {
  let user={
    name:"Harshil",
    college:"SPIT"
  }

  return (
    <div>
      <UseEffectdemo/>
    </div>
  )
}

export default App
