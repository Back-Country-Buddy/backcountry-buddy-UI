import React, { useState, useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import StepWizard from "react-step-wizard"
import "./Form.css"

import { Ride } from "./Ride"
import { Plan } from "./Plan"
import { Debrief } from "./Debrief"
import { TextField } from "./TextField"
import { FormNav } from "./FormNav"

import {
  getDateString,
  addTour,
  updatePlan,
  addPlan,
  getPlan,
  cleanInputStrings,
  updateTour,
} from "../../util.js"

interface TourFormProps {
  userId?: number
  match?: any
}

interface BasicFields {
  location: string
  date: string
  complete: boolean
}

interface PlanFields {
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

export const TourForm: React.FC<TourFormProps> = ({ userId, match }) => {
  const { getAccessTokenSilently } = useAuth0()
  
  const [tourId, setTourId] = useState<string>(match ? match.params.tourId : "")
  const [planId, setPlanId] = useState<number>(0)
  const [isDepartureChecked, setDepartureCheck] = useState<boolean>(false)
  
  const [planFields, setPlanFields] = useState<PlanFields>({
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
  
  const [basicFields, setBasicFields] = useState<BasicFields>({
    location: "place",
    date: "00000",
    complete: false,
  })
  
  useEffect(() => {
    if (tourId.length && match) {
      getAccessTokenSilently().then((token) =>
        getPlan(token, match.params.userId, tourId).then((plan) => {
          setPlanId(plan.data[0].id)
          setPlanFields(cleanInputStrings(plan.data[0].attributes))
        })
      )
    }
  }, [getAccessTokenSilently, tourId, match])

  const sendFormUpdate = () => {
    getAccessTokenSilently().then((token) => {
      if (planId === 0) {
        addTour(token, userId, {
          creator_id: userId,
          location: basicFields.location,
          date: "0000000",
        }).then((response) => {
          setTourId(response.data.id)
          addPlan(token, userId, response.data.id).then((response) =>
            setPlanId(response.data.id)
          )
        })
      } else {
        updatePlan(token, planId, planFields)
      }
    })
  }

  const sendTourUpdate = () => {
    getAccessTokenSilently().then((token) => {
      updateTour(
        token,
        userId ? userId : match.params.userId,
        tourId,
        basicFields
      )
    })
  }

  const markComplete = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setBasicFields({ ...basicFields, complete: true })
    sendTourUpdate()
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
          value={planFields[field as keyof PlanFields]}
          updateForm={(e) =>
            setPlanFields({ ...planFields, [field]: e.target.value })
          }
        />
      )
    })
  }

  const isChecked = (fields: string[]) => {
    return !fields.find((field) => planFields[field as keyof PlanFields] === "")
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
            value={basicFields.date}
            onChange={(e) =>
              setBasicFields({ ...basicFields, date: e.target.value })
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
            value={basicFields.location}
            onChange={(e) =>
              setBasicFields({ ...basicFields, location: e.target.value })
            }
          />
        </div>
      </form>
      
      <button onClick={sendFormUpdate}>SAVE</button>
      
      <div className="form-subform">
        <StepWizard nav={<FormNav steps={["PLAN", "RIDE", "DEBRIEF"]} />}>
          <Plan renderTextInputs={renderTextInputs} isChecked={isChecked} />
          <Ride setChecked={setDepartureCheck} isChecked={isDepartureChecked} />
          <Debrief
            markComplete={markComplete}
            renderTextInputs={renderTextInputs}
            isChecked={isChecked}
          />
        </StepWizard>
      </div>
      
    </main>
  )
}
