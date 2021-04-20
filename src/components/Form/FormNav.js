import React from "react"

export const FormNav = (props) => {
  const advanceSubForm = (event, step) => {
    event.preventDefault()
    props.goToStep(step)
  }

  const buttons = props.steps.map((step, i) => {
    return (
      <button
        key={i}
        onClick={(e) => advanceSubForm(e, i + 1)}
        className={
          props.currentStep === i + 1 ? "form-nav form-nav-active" : "form-nav"
        }
      >
        {step}
      </button>
    )
  })

  return <div className="step-container">{buttons}</div>
}
