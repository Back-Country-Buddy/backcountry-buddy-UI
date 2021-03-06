import React from "react"
import "./PastTours.css"

interface StepProps {
  description?: string
  inputProp: string
}

export const TourStep: React.FC<StepProps> = ({ description, inputProp }) => {
  return (
    <div className="step-wrapper">
      {description && <p className="description">{description}</p>}
      {inputProp ? (
        <div className="input-wrapper">
          <p>{inputProp}</p>
        </div>
      ) : (
        <p className="missing-info">
          Nothing to see here! Looks like you never filled out this step.
        </p>
      )}
    </div>
  )
}
