import React, { useState } from "react"
import StepWizard from "react-step-wizard"
import "./Form.css"

import { Ride } from "./Ride"
import { Plan } from "./Plan"
import { Debrief } from "./Debrief"
import { TextField } from "./TextField"
import { FormNav } from "./FormNav"

import { getDateString } from "../../util"

interface TourFormProps {
  userId: number
}

interface TourFormTextFields {
  location: string
  date: string
  group: string
  hazardWeather: string
  hazardAvalanche: string
  hazardSummary: string
  routePreview: string
  routeAlternative: string
  emergencyPlan: string
  debriefConditions: string
  debriefDecisions: string
  debriefPlan: string
}

export const TourForm: React.FC<TourFormProps> = ({ userId }) => {
  const [textFields, setTextFields] = useState<TourFormTextFields>({
    location: "",
    date: getDateString(new Date()),
    group: "",
    hazardWeather: "",
    hazardAvalanche: "",
    hazardSummary: "",
    routePreview: "",
    routeAlternative: "",
    emergencyPlan: "",
    debriefConditions: "",
    debriefDecisions: "",
    debriefPlan: "",
  })

  const [isDepartureChecked, setDepartureCheck] = useState<boolean>(false)

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
      <div className="form-subform">
        <StepWizard nav={<FormNav steps={["PLAN", "RIDE", "DEBRIEF"]} />}>
          <Plan renderTextInputs={renderTextInputs} isChecked={isChecked} />
          <Ride setChecked={setDepartureCheck} isChecked={isDepartureChecked} />
          <Debrief renderTextInputs={renderTextInputs} isChecked={isChecked} />
        </StepWizard>
      </div>
      <button>SAVE</button>
    </main>
  )
}
