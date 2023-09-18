// using forward Refs

import React, { useRef, useState } from "react";
import Example3aInput from "./Example3aInput";

function Example3a(props) {
    const [input, setInput] = useState("")
    const onFocusClick = useRef()

    const changeHandler = (e)=>{
        setInput(e.target.value)
    }

    const handleClick = ()=>{
        if(!onFocusClick.current.value){
            onFocusClick.current.focus()
            alert("input field is empty")
        }else{
            alert(onFocusClick.current.value)
        }
    }

  return (
    <div>
        <Example3aInput ref={onFocusClick} props={props}/>
        <button onClick={handleClick}>submit</button>        
        <div>{input}</div>
    </div>
  )
}
    export default Example3a
