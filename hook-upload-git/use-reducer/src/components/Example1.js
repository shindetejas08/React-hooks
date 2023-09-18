import React, { useReducer } from "react";
import "./Reducer.css"

const ACTIONS = {
    INCREMENT:"increment",
    DECREMENT:"decrement",
    RESET:"reset",
}

const reducer = (state, action)=>{
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return state+1
        case ACTIONS.DECREMENT:
            return state-1
        case ACTIONS.RESET:
            return state=0
        default:
            throw new Error();
    }
}
const initialState = 0
const Example1 = () => {
    
    const [state,dispatch] =  useReducer(reducer, initialState)

    const increaseCount = ()=>{
        dispatch({type:ACTIONS.INCREMENT})
    }
    const decreaseCount = ()=>{
        dispatch({type:ACTIONS.DECREMENT})
    }
    const resetCount = ()=>{
        dispatch({type:ACTIONS.RESET})
    }
  return (
   <div className="container">
        <h1>Counter App</h1>
        <div className="counter">
            <button id="increment-btn" onClick={increaseCount} >+</button>
            <div id="counter-value">{state}</div>
            <button id="decrement-btn" onClick={decreaseCount}>-</button>
        </div>
        <button id="reset" onClick={resetCount}>Reset</button>
    </div>
  );
};
export default Example1








// import React, { useState } from "react";
// import "./Reducer.css"
// export const Reducer = () => {
//     const[count,setCount] = useState(0)

//     const increaseCount = ()=>{
//         setCount(count+1)
//     }

//     const decreaseCount = ()=>{
//         setCount(count-1)
//     }
//     const resetCount=()=>{
//         setCount(0)
//     }
//   return (
//    <div class="container">
//         <h1>Counter App</h1>
//         <div class="counter">
//             <button id="increment-btn" onClick={increaseCount}>+</button>
//             <div id="counter-value">{count}</div>
//             <button id="decrement-btn" onClick={decreaseCount}>-</button>
//         </div>
//         <button id="reset" onClick={resetCount}>Reset</button>
//     </div>
//   );
// };
