import React from "react"
import { SectionTitle } from "./SectionTitle"

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
      <h2>DEBRIEF</h2>
      <SectionTitle
        title="Summarize Conditions"
        fields={["debrief_conditions"]}
        isChecked={isChecked}
      />
      {renderTextInputs(["debrief_conditions"])}
      <SectionTitle
        title="Review Today's Decisions"
        fields={["debrief_decisions"]}
        isChecked={isChecked}
      />
      {renderTextInputs(["debrief_decisions"])}
      <SectionTitle
        title="Improve Today's Plan"
        fields={["debrief_plan"]}
        isChecked={isChecked}
      />
      {renderTextInputs(["debrief_plan"])}
      <button onClick={markComplete}>COMPLETE TOUR</button>
    </form>
  )
}
