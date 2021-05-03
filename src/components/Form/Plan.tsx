import React, { useState } from "react"
import StepWizard from "react-step-wizard"
import { SectionTitle } from "./SectionTitle"
import { FormNav } from "./FormNav"
import lightbulb from "../../assets/light-bulb (1).svg"

interface PlanProps {
  renderTextInputs: (fields: string[], prompts?: string[]) => JSX.Element[]
  isChecked: (fields: string[]) => boolean
  userList: Array<any>
  addToGroup: (e: React.FormEvent<HTMLFormElement>, input: string) => void
}

export const Plan: React.FC<PlanProps> = ({
  renderTextInputs,
  isChecked,
  userList,
  addToGroup,
}) => {
  const [userQuery, setUserQuery] = useState<string>("")

  const hazardFields: string[] = [
    "hazard_weather",
    "hazard_avalanche",
    "hazard_summary",
  ]
  const hazardPrompts: string[] = [
    "Discuss current & forecast weather factors that can affect travel or hazard:",
    "Identify the avalance problem and location. Discuss the danger trend and timing:",
    "Discuss the advisory's key message:",
  ]
  const routeFields: string[] = ["route_preview", "route_alternative"]
  const routePrompts: string[] = [
    "Preview terrain:",
    "When uncertain discuss a less exposed alternate route:",
  ]

  const renderUserList = () => {
    return userList.map((user, i) => {
      return (
        <div key={i}>
          <h4>{user.name}</h4>
          <p>Emergency Contact:</p>
          {!user.emergency_contact_name || !user.emergency_number ? (
            <p className="missing-info">None added yet!</p>
          ) : (
            <p>
              {user.emergency_contact_name}, {user.emergency_number}
            </p>
          )}
        </div>
      )
    })
  }

  return (
    <form
      onSubmit={(e) => {
        addToGroup(e, userQuery)
        setUserQuery("")
      }}
    >
      <div className="title-wrapper">
        <img src={lightbulb} alt="lightbulb" className="form-icon" />
        <h2 className="title">PLAN your trip</h2>
      </div>
      <StepWizard nav={<FormNav steps={["1", "2", "3", "4"]} />}>
        <div className="step">
          <SectionTitle
            title="Assemble Your Group"
            fields={["group"]}
            isChecked={isChecked}
          />
          <p className="section-description">
            Add tour partners by email below. (Note that they must create an
            account first to be added.)
          </p>
          <input
            type="text"
            value={userQuery}
            onChange={(e) => setUserQuery(e.target.value)}
          />
          <br />
          <input type="submit" className="button-submit" />
          {renderUserList()}
        </div>
        <div className="step">
          <SectionTitle
            title="Anticipate the Hazard"
            fields={hazardFields}
            isChecked={isChecked}
          />
          <p className="section-description">
            Read the local avalanche advisory. Seek expert opinion.
          </p>
          {renderTextInputs(hazardFields, hazardPrompts)}
        </div>
        <div className="step">
          <SectionTitle
            title="Plan Your Route"
            fields={routeFields}
            isChecked={isChecked}
          />
          <p className="section-description">
            Voice all concerns. Respect any veto. Decide by consensus.
          </p>
          {renderTextInputs(routeFields, routePrompts)}
        </div>
        <div className="step">
          <SectionTitle
            title="Discuss Your Emergency Plan"
            fields={["emergency_plan"]}
            isChecked={isChecked}
          />
          <p className="section-description">Assign group gear.</p>
          {renderTextInputs(["emergency_plan"])}
        </div>
      </StepWizard>
    </form>
  )
}
