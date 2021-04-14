import React from 'react'

export const PlanNav = (props) => {
  const advanceSubForm = (event, step) => {
    event.preventDefault()
    props.goToStep(step)
  }

  return (
    <span>
      <button onClick={e => advanceSubForm(e, 1)}>STEP 1</button>
      <button onClick={e => advanceSubForm(e, 2)}>STEP 2</button>
      <button onClick={e => advanceSubForm(e, 3)}>STEP 3</button>
      <button onClick={e => advanceSubForm(e, 4)}>STEP 4</button>
    </span>
  )
}
