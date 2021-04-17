import React, { useState, useEffect } from "react"
import StepWizard from "react-step-wizard"
import "./Form.css"

import { Ride } from "./Ride"
import { Plan } from "./Plan"
import { Debrief } from "./Debrief"
import { TextField } from "./TextField"
import { FormNav } from "./FormNav"

import { getDateString, addTour, updatePlan, addPlan } from "../../util.js"
import { useAuth0 } from "@auth0/auth0-react"

interface TourFormProps {
  userId: number
}

interface TourFormTextFields {
  location: string
  date: string
  group: string
  hazard_weather: string
  hazard_avalanche: string
  hazard_summary: string
  route_preview: string
  route_alternative: string
  emergency_plan: string
  debrief_conditions: string
  debrief_decisions: string
  debrief_plan: string
}

export const TourForm: React.FC<TourFormProps> = ({ userId }) => {
  const [textFields, setTextFields] = useState<TourFormTextFields>({
    location: "",
    date: getDateString(new Date()),
    group: "",
    hazard_weather: "",
    hazard_avalanche: "",
    hazard_summary: "",
    route_preview: "",
    route_alternative: "",
    emergency_plan: "",
    debrief_conditions: "",
    debrief_decisions: "",
    debrief_plan: "",
  })

  const [tourId, setTourId] = useState<number>(0)
  const [planId, setPlanId] = useState<number>(0)

  const [isDepartureChecked, setDepartureCheck] = useState<boolean>(false)

  const { getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    getAccessTokenSilently().then(token => {
          addTour(token, userId, {
            creator_id: userId,
            location: 'Someplace',
            date: '0000000'
          }).then(response => {
            setTourId(response.data.id)
            addPlan(token, userId, response.data.id)
              .then(response => setPlanId(response.data.id))
          })
    })
  }, [userId])

  const sendFormUpdate = () => {
    getAccessTokenSilently().then(token => {
        updatePlan(token, userId, tourId, planId, textFields)
    })
  }

  const renderTextInputs = (
    fields: string[],
    prompts?: string[]
  ): JSX.Element[] => {
    return fields.map((field, i) => {
      return (
        <TextField
          key={i}
          prompt={prompts ? prompts[i] : null}
          value={textFields[field as keyof TourFormTextFields]}
          updateForm={(e) =>
            setTextFields({ ...textFields, [field]: e.target.value })
          }
        />
      )
    })
  }

  const isChecked = (fields: string[]) => {
    return !fields.find(
      (field) => textFields[field as keyof TourFormTextFields] === ""
    )
  }

  return (
    <main>
      <h1>Current Tour</h1>
      <form className="form-basic">
        <div className="form-section">
          <label htmlFor="date" className="form-label">
            DATE
          </label>
          <input
            type="date"
            name="date"
            value={textFields.date}
            onChange={(e) =>
              setTextFields({ ...textFields, date: e.target.value })
            }
            min={getDateString(new Date())}
          />
        </div>
        <div className="form-section">
          <label htmlFor="location" className="form-label">
            LOCATION
          </label>
          <input
            type="text"
            name="location"
            value={textFields.location}
            onChange={(e) =>
              setTextFields({ ...textFields, location: e.target.value })
            }
          />
        </div>
      </form>
      <button onClick={sendFormUpdate}>SAVE</button>
      <div className="form-subform">
        <StepWizard nav={<FormNav steps={["PLAN", "RIDE", "DEBRIEF"]} />}>
          <Plan renderTextInputs={renderTextInputs} isChecked={isChecked} />
          <Ride setChecked={setDepartureCheck} isChecked={isDepartureChecked} />
          <Debrief renderTextInputs={renderTextInputs} isChecked={isChecked} />
        </StepWizard>
      </div>
    </main>
  )
}
