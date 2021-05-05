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

import { updatePlan, addPlan, getPlan } from "../../apiRequests/planRequests.js"
import { secureCall } from "../../apiRequests/promiseHandling.js"
import { cleanDate, cleanInputStrings } from "../../apiRequests/dataCleaners.js"
import {
  getTour,
  addTour,
  updateTour,
  getUsersInTour,
  addUsersToTour,
} from "../../apiRequests/tourRequests.js"

interface TourFormProps {
  userId?: number
  match?: any
  setErr: () => any
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
  // departure_check?: boolean // will update this once backend bug is fixed soon
}

export const TourForm: React.FC<TourFormProps> = ({
  userId,
  match,
  setErr,
}) => {
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
    location: "",
    date: cleanDate(new Date().toISOString()),
    complete: false,
  })

  const [tourId, setTourId] = useState<string>(match ? match.params.tourId : "")
  const [planId, setPlanId] = useState<number>(0)
  const [isDepartureChecked, setDepartureCheck] = useState<boolean>(false)
  const [basicChange, setBasicChange] = useState<boolean>(false)
  const [planChange, setPlanChange] = useState<boolean>(false)
  const [usersInTour, setUsersInTour] = useState<Array<any>>([])

  const { getAccessTokenSilently } = useAuth0()

  const sendFormUpdate = () => {
    if (planChange) {
      secureCall(getAccessTokenSilently, setErr, updatePlan, planId, planFields)
      setPlanChange(false)
    }
    if (basicChange) {
      secureCall(getAccessTokenSilently, setErr, updateTour, tourId, {
        ...basicFields,
        date: cleanDate(basicFields.date),
      })
      setBasicChange(false)
    }
  }

  useEffect(() => {
    if (tourId.length && match && !planId) {
      secureCall(
        getAccessTokenSilently,
        setErr,
        getPlan,
        match.params.userId,
        null,
        tourId
      ).then((plan: any) => {
        setPlanId(plan.data[0].id)
        setPlanFields(cleanInputStrings(plan.data[0].attributes))
      })

      secureCall(getAccessTokenSilently, setErr, getUsersInTour, tourId).then(
        (users) =>
          setUsersInTour(
            users.data.map((user: any) => {
              return cleanInputStrings({
                name: user.attributes.user_name,
                emergency_contact_name: user.attributes.emergency_contact_name,
                emergency_number: user.attributes.emergency_number,
              })
            })
          )
      )

      secureCall(getAccessTokenSilently, setErr, getTour, tourId).then(
        (tour: any) => {
          setBasicFields({
            location: tour.data.attributes.location,
            date: cleanDate(tour.data.attributes.date),
            complete: tour.data.attributes.complete,
          })
        }
      )
    }
    if (basicFields.complete) {
      sendFormUpdate()
    }
  })

  const createTour = () => {
    if (!tourId) {
      secureCall(getAccessTokenSilently, setErr, addTour, userId, {
        creator_id: userId,
        location: basicFields.location,
        date: basicFields.date,
      }).then((response) => {
        setTourId(response.data.id)

        secureCall(
          getAccessTokenSilently,
          setErr,
          getUsersInTour,
          response.data.id
        ).then((users) =>
          setUsersInTour(
            users.data.map((user: any) => {
              return cleanInputStrings({
                name: user.attributes.user_name,
                emergency_contact_name: user.attributes.emergency_contact_name,
                emergency_number: user.attributes.emergency_number,
              })
            })
          )
        )

        secureCall(
          getAccessTokenSilently,
          setErr,
          addPlan,
          userId,
          null,
          response.data.id
        ).then((response) => setPlanId(response.data.id))
      })
    }
  }

  const markComplete = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setBasicFields({ ...basicFields, complete: true })
    setBasicChange(true)
  }

  const renderTextInputs = (
    fields: string[],
    prompts?: string[]
  ): JSX.Element[] => {
    return fields.map((field, i) => {
      return (
        <TextField
          key={i}
          prompt={prompts ? prompts[i] : undefined}
          value={planFields[field as keyof PlanFields]}
          updateForm={(e) => {
            setPlanFields({ ...planFields, [field]: e.target.value })
            setPlanChange(true)
          }}
        />
      )
    })
  }

  const addToGroup = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    input: string
  ) => {
    e.preventDefault()
    secureCall(
      getAccessTokenSilently,
      null,
      addUsersToTour,
      tourId,
      null,
      input
    ).then(() => {
      secureCall(getAccessTokenSilently, setErr, getUsersInTour, tourId).then(
        (users) =>
          setUsersInTour(
            users.data.map((user: any) => {
              return cleanInputStrings({
                name: user.attributes.user_name,
                emergency_contact_name: user.attributes.emergency_contact_name,
                emergency_number: user.attributes.emergency_number,
              })
            })
          )
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
                id="date"
                value={basicFields.date}
                onChange={(e) =>
                  setBasicFields({ ...basicFields, date: e.target.value })
                }
                min={cleanDate(new Date().toISOString())}
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
                id="location"
                placeholder="Trailhead, zone, etc."
                value={basicFields.location}
                onChange={(e) =>
                  setBasicFields({ ...basicFields, location: e.target.value })
                }
              />
            </div>
          </form>

          {planId ? (
            <div className="form-subform">
              <StepWizard nav={<FormNav steps={["Plan", "Ride", "Debrief"]} />}>
                <Plan
                  renderTextInputs={renderTextInputs}
                  isChecked={isChecked}
                  userList={usersInTour}
                  addToGroup={addToGroup}
                />
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
          ) : (
            <button
              className={!basicFields.location ? "disabled" : "button-save"}
              disabled={!basicFields.location}
              onClick={createTour}
            >
              CREATE TOUR
            </button>
          )}
        </div>

        {planId > 0 && (
          <button className="button-save" onClick={sendFormUpdate}>
            SAVE UPDATES
          </button>
        )}

        <NavBar />
      </div>
    </main>
  )
}
