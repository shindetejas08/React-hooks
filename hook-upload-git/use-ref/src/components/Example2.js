import React, { useRef, useState } from "react";
// using useRef hooks
function Example2() {
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
        <input ref={onFocusClick} onChange={changeHandler} type="text"  />
        <button onClick={handleClick}>submit</button>        
        <div>{input}</div>
    </div>
  )
}
    export default Example2
