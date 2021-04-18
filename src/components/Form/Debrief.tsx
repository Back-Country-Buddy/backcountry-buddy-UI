import React from 'react'
import { SectionTitle } from './SectionTitle'
import './Form.css'
import question from '../../assets/question (1).png'

interface DebriefProps {
  renderTextInputs: (fields: string[]) => JSX.Element[],
  isChecked: (fields: string[]) => boolean
}

export const Debrief: React.FC<DebriefProps> = ({ renderTextInputs, isChecked }) => {
  return (
    <form>
      <div className='form-title-wrapper'>
        <img src={question} alt="lightbulb" className="form-icon" />
        <h2>DEBRIEF</h2>
      </div>
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
