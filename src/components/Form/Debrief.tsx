import React from "react"
import { SectionTitle } from "./SectionTitle"
import question from "../../assets/question-sign.svg"


interface DebriefProps {
  renderTextInputs: (fields: string[], prompts?: string[]) => JSX.Element[]
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
        {renderTextInputs(
          ["debrief_conditions"],
          ["How did today's weather affect conditions?"]
        )}
      </div>
      <div className="step">
        <SectionTitle
          title="Review Today's Decisions"
          fields={["debrief_decisions"]}
          isChecked={isChecked}
        />
        {renderTextInputs(
          ["debrief_decisions"],
          [
            "What were the strengths & shortcomings of today's plan? Where were we most exposed to avalanche risk?",
          ]
        )}
      </div>
      <div className="step">
        <SectionTitle
          title="Improve Today's Plan"
          fields={["debrief_plan"]}
          isChecked={isChecked}
        />
        {renderTextInputs(
          ["debrief_plan"],
          ["What could we have done better?"]
        )}
      </div>
      <button className="button-secondary" onClick={markComplete}>
        COMPLETE TOUR
      </button>
    </form>
  )
}
