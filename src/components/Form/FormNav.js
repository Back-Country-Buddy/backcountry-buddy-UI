import React from 'react'
import './Form.css'

export const FormNav = (props) => {
  const advanceSubForm = (event, step) => {
    event.preventDefault()
    props.goToStep(step)
  }

  const buttons = props.steps.map((step, i) => {
    return(
      <button
        key={i}
        onClick={e => advanceSubForm(e, i+1)}
        className='form-nav'
      >{step}</button>
    )
  })

  return (
    <section className='form-sections-wrapper'>
      <span className='form-sections'>
        {buttons}
      </span>
    </section>
  )
}
