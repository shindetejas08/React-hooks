import React from 'react'

const Example3aInput = React.forwardRef((props,ref)=> {
  return (
    <input ref={ref} {...props}/>
  )
})

export default Example3aInput
