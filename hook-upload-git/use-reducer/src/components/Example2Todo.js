import React from 'react'
import {ACTIONS} from "./Example2"

function Example2Todo({todo, dispatch}) {
  return (
    <div>
      <span style={{color: todo.complete ? "#AAA":"#000"}}>
        {todo.name}
      </span>
      <button onClick={()=>{dispatch({type:ACTIONS.TOGGLE_TODO, payload:{id: todo.id}})}} style={{margin:"2px", padding:"2px"}}>Toggle</button>
      <button onClick={()=>{dispatch({type:ACTIONS.DELETE_TODO, payload:{id: todo.id}})}} style={{margin:"2px", padding:"2px"}}>Delete</button>
    </div>
  )
}

export default Example2Todo
