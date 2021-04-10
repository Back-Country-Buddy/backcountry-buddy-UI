import React from 'react'
import { TourFormState } from './TourForm'
import { SectionTitle } from './SectionTitle'
import './Form.css'

interface PlanProps {
  state: TourFormState,
  setState: (newState: TourFormState) => any,
}


export const Plan: React.FC<PlanProps> = ({ state, setState }) => {
  const hazardFields = [state.hazardWeather, state.hazardAvalanche, state.hazardSummary]
  const routeFields = [state.routePreview, state.routeAlternative]

  return (
    <form>
      <SectionTitle
        title='Anticipate the Hazard'
        fields={hazardFields}
      />
      <input
        type='text'
        value={state.hazardWeather}
        onChange={e => setState({...state, hazardWeather: e.target.value})}
      />
      <input
        type='text'
        value={state.hazardAvalanche}
        onChange={e => setState({...state, hazardAvalanche: e.target.value})}
      />
      <input
        type='text'
        value={state.hazardSummary}
        onChange={e => setState({...state, hazardSummary: e.target.value})}
      />
      <SectionTitle
        title='Plan Your Route'
        fields={routeFields}
      />
      <input
        type='text'
        value={state.routePreview}
        onChange={e => setState({...state, routePreview: e.target.value})}
      />
      <input
        type='text'
        value={state.routeAlternative}
        onChange={e => setState({...state, routeAlternative: e.target.value})}
      />
      <SectionTitle
        title='Discuss Your Emergency Plan'
        fields={[state.emergencyPlan]}
      />
      <input
        type='text'
        value={state.emergencyPlan}
        onChange={e => setState({...state, emergencyPlan: e.target.value})}
      />
    </form>
  )
}
