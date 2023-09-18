import React, { useEffect, useRef, useState } from "react";

// useRef() hook:
// - Mainly used for 2 purposes:
//     1. Use a value which persists between render cycles and unlike useState() it does not
//         re-renders the componment by itself.
//     2. It is used to refer any HTML element in the DOM.
//         Usually with the vanilla JS we use ID's, Tags and QuerySelectors
//         to access the HTML element, but in React we have been provided
//         with special react hook called useRef() to access the particular
//         element in the DOM

function Example1() {

  const [input, setInput] = useState("")
//   const [count, setCount] = useState(1)

//   useEffect(()=>{
//     // setCount((prevState)=>{
//     //     return prevState+1
//     // })
//   })

// using useRef
    const count = useRef(1)
    useEffect(() => {
         count.current += 1
    })
    

  const handleChange = (e)=>{
    setInput(e.target.value)
  }

  return <div>
    <input type="text" onChange={handleChange} />
    <div>You Entered: "{input}"</div>
    <h2>Component Re-Rendered {count.current} times</h2>
  </div>;
}

export default Example1;
