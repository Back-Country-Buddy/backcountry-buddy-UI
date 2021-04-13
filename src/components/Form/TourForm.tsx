import React, { useState, useEffect } from 'react'
import { Ride}  from './Ride'
import { Plan } from './Plan'
import { Debrief } from './Debrief'
import { TextField } from './TextField'
import { getDateString } from '../../util'
import {tourFormData} from '../../mockdata/tourFormData'
import './Form.css'

interface TourFormProps {
  tourId?: number,
}

interface TourFormTextFields {
  tourId?: string,
  location: string,
  date: string,
  group: string,
  hazardWeather: string,
  hazardAvalanche: string,
  hazardSummary: string,
  routePreview: string,
  routeAlternative: string,
  emergencyPlan: string,
  debriefConditions: string,
  debriefDecisions: string,
  debriefPlan: string,
}

export const TourForm: React.FC<TourFormProps> = ({ tourId }) => {
  const [textFields, setTextFields] = useState<TourFormTextFields>({
    location: '',
    date: getDateString(new Date()),
    group: '',
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

  const [isDepartureChecked, setDepartureCheck] = useState<boolean>(false)

  useEffect(() => {
    const tour = tourId ? tourFormData.find(tour => parseInt(tour.tourId) === tourId) : null
    if (tour) {
      setTextFields(tour)
    }
  }, [])

  const renderTextInputs = (fields: string[], prompts?: string[]): JSX.Element[] => {
    return fields.map((field, i)=> {
      return (
        <TextField
          key={i}
          prompt={prompts? prompts[i] : null}
          value={textFields[field as keyof TourFormTextFields]}
          updateForm={e => setTextFields({ ...textFields, [field]: e.target.value})}
        />
      )
    })
  }

  const isChecked = (fields: string[]) => {
    return !fields.find(field => textFields[field as keyof TourFormTextFields] === '')
  }

  return (
    <div>
      <input
        type='date'
        value={textFields.date}
        onChange={e => setTextFields({ ...textFields, date: e.target.value})}
        min={getDateString(new Date())}
      />
      <input
        type='text'
        value={textFields.location}
        onChange={e => setTextFields({ ...textFields, location: e.target.value})}
      />
      <Plan
        renderTextInputs={renderTextInputs}
        isChecked={isChecked}
      />
      <Ride
        setChecked={setDepartureCheck}
        isChecked={isDepartureChecked}
      />
      <Debrief
        renderTextInputs={renderTextInputs}
        isChecked={isChecked}
      />
    </div>
  )
}
