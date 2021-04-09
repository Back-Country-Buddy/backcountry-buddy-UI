import React, { useState } from 'react'
import Debrief from './Debrief'
import Ride from './Ride'
import Plan from './Plan'

interface TourFormProps {
  userId: number,
}

interface TourFormState {
  location: string,
  date: number,
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
    date: Date.now(),
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

    </div>
  )
}
