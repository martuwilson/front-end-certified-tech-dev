import React from 'react'

export const ChildComponent = React.memo(({onClick}) => {

    console.log('ChildComponent render')

  return (
    <button onClick={onClick}>Incrementar</button>
  )
})
