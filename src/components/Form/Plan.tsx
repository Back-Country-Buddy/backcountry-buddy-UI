import React from 'react'
import { SectionTitle } from './SectionTitle'
import './Form.css'

interface PlanProps {
  renderTextInputs: (fields: string[]) => JSX.Element[],
  isChecked: (fields: string[]) => boolean
}


export const Plan: React.FC<PlanProps> = ({ renderTextInputs, isChecked }) => {
  const hazardFields = ['hazardWeather', 'hazardAvalanche', 'hazardSummary']
  const routeFields = ['routePreview', 'routeAlternative']

  return (
    <form>
      <SectionTitle
        title='Anticipate the Hazard'
        fields={hazardFields}
        isChecked={isChecked}
      />
      {renderTextInputs(hazardFields)}
      <SectionTitle
        title='Plan Your Route'
        fields={routeFields}
        isChecked={isChecked}
      />
      {renderTextInputs(routeFields)}
      <SectionTitle
        title='Discuss Your Emergency Plan'
        fields={['emergencyPlan']}
        isChecked={isChecked}
      />
      {renderTextInputs(['emergencyPlan'])}
    </form>
  )
}
