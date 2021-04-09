import React, { useState } from 'react'
import Debrief from './Debrief'
import Ride from './Ride'
import { Plan } from './Plan'

interface TourFormProps {
  userId: number,
}

export interface TourFormState {
  location: string,
  date: string,
  hazardWeather: string,
  hazardAvalanche: string,
  hazardSummary: string,
  routePreview: string,
  routeAlternative: string,
  emergencyPlan: string,
  debriefConditions: string,
  debriefDecisions: string,
  debriefPlan: string
}

export const TourForm: React.FC<TourFormProps> = ({ userId }) => {
  const [state, setState] = useState<TourFormState>({
    location: '',
    date: Date.now().toString(),
    hazardWeather: '',
    hazardAvalanche: '',
    hazardSummary: '',
    routePreview: '',
    routeAlternative: '',
    emergencyPlan: '',
    debriefConditions: '',
    debriefDecisions: '',
    debriefPlan: ''
  })

  return (
    <div>
      <input
        type='date'
        value={state.date}
        onChange={e => setState({ ...state, date: e.target.value})}
      />
      <input
        type='text'
        value={state.location}
        onChange={e => setState({ ...state, location: e.target.value})}
      />
      <Plan
        setState={setState}
        state={state}
      />
    </div>
  )
}
