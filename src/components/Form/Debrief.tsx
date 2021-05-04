import React from "react"
import { SectionTitle } from "./SectionTitle"
import question from "../../assets/question-sign.svg"
import { completeAlert } from "../Alert/Alert.js"

interface DebriefProps {
  renderTextInputs: (fields: string[]) => JSX.Element[]
  isChecked: (fields: string[]) => boolean
  markComplete: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Debrief: React.FC<DebriefProps> = ({
  renderTextInputs,
  isChecked,
  markComplete,
}) => {
  return (
    <form>
      <div className="title-wrapper">
        <img src={question} alt="question mark" className="form-icon" />
        <h2 className="title">DEBRIEF</h2>
      </div>
      <div className="step">
        <SectionTitle
          title="Summarize Conditions"
          fields={["debrief_conditions"]}
          isChecked={isChecked}
        />
        {renderTextInputs(["debrief_conditions"])}
      </div>
      <div className="step">
        <SectionTitle
          title="Review Today's Decisions"
          fields={["debrief_decisions"]}
          isChecked={isChecked}
        />
        {renderTextInputs(["debrief_decisions"])}
      </div>
      <div className="step">
        <SectionTitle
          title="Improve Today's Plan"
          fields={["debrief_plan"]}
          isChecked={isChecked}
        />
        {renderTextInputs(["debrief_plan"])}
      </div>
      <button className="button-secondary" onClick={markComplete}>
        COMPLETE TOUR
      </button>
    </form>
  )
}
