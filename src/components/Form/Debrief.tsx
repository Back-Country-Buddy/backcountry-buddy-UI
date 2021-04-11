import React from 'react'
import { SectionTitle } from './SectionTitle'

interface DebriefProps {
  renderTextInputs: (fields: string[]) => JSX.Element[],
  isChecked: (fields: string[]) => boolean
}

export const Debrief: React.FC<DebriefProps> = ({ renderTextInputs, isChecked }) => {
  return (
    <form>
      <SectionTitle
        title='Summarize Conditions'
        fields={['debriefConditions']}
        isChecked={isChecked}
      />
      {renderTextInputs(['debriefConditions'])}
      <SectionTitle
        title="Review Today's Decisions"
        fields={['debriefDecisions']}
        isChecked={isChecked}
      />
      {renderTextInputs(['debriefDecisions'])}
      <SectionTitle
        title="Improve Today's Plan"
        fields={['debriefPlan']}
        isChecked={isChecked}
      />
      {renderTextInputs(['debriefPlan'])}
    </form>
  )
}
