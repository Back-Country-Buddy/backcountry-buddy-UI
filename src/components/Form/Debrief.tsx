import React from 'react'
import { SectionTitle } from './SectionTitle'

interface DebriefProps {
  renderTextInputs: (fields: string[]) => JSX.Element[],
  isChecked: (fields: string[]) => boolean
}

export const Debrief: React.FC<DebriefProps> = ({ renderTextInputs, isChecked }) => {
  return (
    <form>
      <h2>DEBRIEF</h2>
      <SectionTitle
        title='Summarize Conditions'
        fields={['debriefConditions']}
        isChecked={isChecked}
      />
      {renderTextInputs(['debrief_conditions'])}
      <SectionTitle
        title="Review Today's Decisions"
        fields={['debriefDecisions']}
        isChecked={isChecked}
      />
      {renderTextInputs(['debrief_decisions'])}
      <SectionTitle
        title="Improve Today's Plan"
        fields={['debriefPlan']}
        isChecked={isChecked}
      />
      {renderTextInputs(['debrief_plan'])}
    </form>
  )
}
