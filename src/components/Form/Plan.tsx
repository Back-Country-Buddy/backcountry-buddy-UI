import React from 'react'
import { SectionTitle } from './SectionTitle'
import StepWizard from 'react-step-wizard'
import { FormNav } from './FormNav'
import lightbulb from '../../assets/light-bulb (1).svg'

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
      <div className='form-title-wrapper'>
        <img src={lightbulb} alt="lightbulb" className="form-icon" />
        <h2 className='head-form-title'>PLAN your trip</h2>
      </div>
      <StepWizard
        nav={<FormNav
              steps={['i', 'ii', 'iii', 'iv']}
            />}
      >
        <div className='assemble'>
          <SectionTitle
            title='Assemble Your Group'
            fields={['group']}
            isChecked={isChecked}
          />
          {renderTextInputs(['group'])}
        </div>
        <div>
          <SectionTitle
            title='Anticipate the Hazard'
            fields={hazardFields}
            isChecked={isChecked}
          />
          {renderTextInputs(hazardFields, hazardPrompts)}
        </div>
        <div>
          <SectionTitle
            title='Plan Your Route'
            fields={routeFields}
            isChecked={isChecked}
          />
          {renderTextInputs(routeFields, routePrompts)}
        </div>
        <div>
          <SectionTitle
            title='Discuss Your Emergency Plan'
            fields={['emergencyPlan']}
            isChecked={isChecked}
          />
          {renderTextInputs(['emergencyPlan'])}
        </div>
      </StepWizard>
    </form>
  )
}
