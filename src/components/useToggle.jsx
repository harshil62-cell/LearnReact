import { useState } from "react";
const useToggle=(defaultval)=>{
    const[value,setValue]=useState(defaultval);
    function toogle(val){
        if(typeof val!='boolean'){
            setValue(!value)
        }else{
            setValue(val);
        }
    }
    return [value,toogle]
}

export default useToggle;