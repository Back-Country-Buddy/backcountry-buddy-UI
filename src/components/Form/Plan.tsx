import React from 'react'
import { SectionTitle } from './SectionTitle'

interface PlanProps {
  renderTextInputs: (fields: string[], prompts?: string[]) => JSX.Element[],
  isChecked: (fields: string[]) => boolean
}


export const Plan: React.FC<PlanProps> = ({ renderTextInputs, isChecked }) => {
  const hazardFields: string[] = ['hazardWeather', 'hazardAvalanche', 'hazardSummary']
  const hazardPrompts: string[] = [
    'Discuss current & forecast weather factors that can affect travel or hazard.',
    'Identify the avalance problem and location. Discuss the danger trend and timing.',
    'Discuss the advisory\'s key message'
  ]
  const routeFields: string [] = ['routePreview', 'routeAlternative']
  const routePrompts: string[] = [
    'Preview terrain',
    'When uncertain discuss a less exposed alternate route'
  ]

  return (
    <form>
      <SectionTitle
        title='Assemble Your Group'
        fields={['group']}
        isChecked={isChecked}
      />
      {renderTextInputs(['group'])}
      <SectionTitle
        title='Anticipate the Hazard'
        fields={hazardFields}
        isChecked={isChecked}
      />
      {renderTextInputs(hazardFields, hazardPrompts)}
      <SectionTitle
        title='Plan Your Route'
        fields={routeFields}
        isChecked={isChecked}
      />
      {renderTextInputs(routeFields, routePrompts)}
      <SectionTitle
        title='Discuss Your Emergency Plan'
        fields={['emergencyPlan']}
        isChecked={isChecked}
      />
      {renderTextInputs(['emergencyPlan'])}
    </form>
  )
}
