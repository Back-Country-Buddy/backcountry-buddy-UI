import React from 'react'

export const FormNav = (props) => {
  return (
    <span>
      <button onClick={() => props.goToStep(1)}>PLAN</button>
      <button onClick={() => props.goToStep(2)}>RIDE</button>
      <button onClick={() => props.goToStep(3)}>DEBRIEF</button>
    </span>
  )
}
