import React, { useState } from "react"
import StepWizard from "react-step-wizard"
import { SectionTitle } from "./SectionTitle"
import { FormNav } from "./FormNav"
import lightbulb from "../../assets/light-bulb (1).svg"

interface PlanProps {
  renderTextInputs: (fields: string[], prompts?: string[]) => JSX.Element[]
  isChecked: (fields: string[]) => boolean
  userList: Array<any>
  addToGroup: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    input: string
  ) => void
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
              {user.emergency_contact_name},{" "}
              <a href={`tel:${user.emergency_number}`}>
                {user.emergency_number}
              </a>
            </p>
          )}
        </div>
      )
    })
  }

  const submitUser = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    addToGroup(e, userQuery)
    setUserQuery("")
  }

  return (
    <form>
      <div className="title-wrapper">
        <img src={lightbulb} alt="lightbulb" className="form-icon" />
        <h2 className="title">PLAN your trip</h2>
      </div>
      <StepWizard  nav={<FormNav className='plan-step' steps={["1", "2", "3", "4"]} />}>
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
          <label htmlFor="tour-partners" className="hidden-label">
            Add Tour Partners
          </label>
          <input
            id="tour-partners"
            type="text"
            value={userQuery}
            onChange={(e) => setUserQuery(e.target.value)}
          />
          <br />
          <button className="button-submit" onClick={(e) => submitUser(e)}>
            Submit
          </button>
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
          {renderTextInputs(
            ["emergency_plan"],
            [
              "Who else has our itinerary? Invite the devil's advocate into the conversation. Try to identify any holes and what's necessary to carry out the plan.",
            ]
          )}
        </div>
      </StepWizard>
    </form>
  )
}
