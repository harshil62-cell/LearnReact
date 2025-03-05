import React from 'react'

function clicked(param){
    alert(param);
}

function Practice2() {
  return (
    <div>
        <button onClick={(param)=>clicked(param)}>Click</button>
    </div>
  )
}

export default Practice2