import React,{useState} from 'react'
import style from './Cssmodule.module.css'

function Cssmodule() {
    const [cardStyle,setCardStyle]=useState({
            border:"2px solid white",
            shadow:"5px",
            width:'400px',
            margin:"10px",
            padding:"10px"
        })
  return (
    <div>Cssmodulestyling
         <div style={cardStyle}>
            <h1 className={style.heading}>User profile card</h1>
            <img style={{width:"200px"}} src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-855.jpg?t=st=1741242336~exp=1741245936~hmac=2cace823f9b43945ebc9d7bbf3b861de837067bea188cf73e14e2631b0e33fb9&w=740"></img>
            <p>Name:Harshil Vasani</p>
            <p>Role:Java Intern</p>
        </div>
    </div>
  )
}

export default Cssmodule