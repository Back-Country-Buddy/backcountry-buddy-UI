import React from 'react'
import { TourFormState } from './TourForm'

interface PlanProps {
  state: TourFormState,
  setState: (newState: TourFormState) => any,
}


export const Plan: React.FC<PlanProps> = ({ state, setState }) => {
  return (
    <div>
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
      <input
        type='text'
        value={state.emergencyPlan}
        onChange={e => setState({...state, emergencyPlan: e.target.value})}
      />
    </div>
  )
}
