import React, { useState, useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import StepWizard from "react-step-wizard"
import "./Form.css"

import { Ride } from "./Ride"
import { Plan } from "./Plan"
import { Debrief } from "./Debrief"
import { TextField } from "./TextField"
import { FormNav } from "./FormNav"
import { NavBar } from "../NavBar/NavBar"

import {
  getDateString,
  addTour,
  updatePlan,
  addPlan,
  getTour,
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
  // departure_check?: boolean
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
    // departure_check: false
  })

  const [basicFields, setBasicFields] = useState<BasicFields>({
    location: "",
    date: "00000",
    complete: false,
  })

  useEffect(() => {
    if (tourId.length && match) {
      getAccessTokenSilently().then((token) => {
        getTour(token, userId, tourId).then((tour) =>
          setBasicFields({
            ...basicFields,
            location: tour.data.attributes.location,
            date: tour.data.attributes.date,
          })
        )
      })
      getAccessTokenSilently().then((token) => {
        getPlan(token, match.params.userId, tourId).then((plan) => {
          setPlanId(plan.data[0].id)
          setPlanFields(cleanInputStrings(plan.data[0].attributes))
        })
      })
    }
  }, [getAccessTokenSilently, tourId, match, basicFields, userId])

  const createTour = () => {
    if (!tourId) {
      getAccessTokenSilently().then((token) => {
        addTour(token, userId, {
          creator_id: userId,
          location: basicFields.location,
          date: basicFields.date,
        }).then((response) => {
          setTourId(response.data.id)
          addPlan(token, userId, response.data.id).then((response) =>
            setPlanId(response.data.id)
          )
        })
      })
    }
  }

  const savePlanUpdates = () => {
    getAccessTokenSilently().then((token) => {
      updatePlan(token, planId, planFields)
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

  const toggleDepartureCheck = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setDepartureCheck(!isDepartureChecked)
    //make a call to the backend to make a PATCH once that property is added
  }

  const isChecked = (fields: string[]) => {
    return !fields.find((field) => planFields[field as keyof PlanFields] === "")
  }

  return (
    <main>
      <div>
        <div className="tour-form-container">
          <h1>Upcoming Tour</h1>

          <form className="form-basic">
            <div className="form-section">
              <label htmlFor="date" className="form-label">
                DATE
              </label>
              <input
                required
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
                required
                type="text"
                name="location"
                placeholder="Trailhead, zone, etc."
                value={basicFields.location}
                onChange={(e) =>
                  setBasicFields({ ...basicFields, location: e.target.value })
                }
              />
            </div>
          </form>

          <div className="form-subform">
            <StepWizard nav={<FormNav steps={["Plan", "Ride", "Debrief"]} />}>
              <Plan renderTextInputs={renderTextInputs} isChecked={isChecked} />
              <Ride
                setChecked={toggleDepartureCheck}
                isChecked={isDepartureChecked}
              />
              <Debrief
                markComplete={markComplete}
                renderTextInputs={renderTextInputs}
                isChecked={isChecked}
              />
            </StepWizard>
          </div>
        </div>

        {!planId ? (
          <button
            className="button-save"
            disabled={!basicFields.location}
            onClick={createTour}
          >
            CREATE TOUR
          </button>
        ) : (
          <button className="button-save" onClick={savePlanUpdates}>
            SAVE UPDATES
          </button>
        )}

        <NavBar />
      </div>
    </main>
  )
}
