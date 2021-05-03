import React, { useState, useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react"

import "./PastTours.css"

import { getPlan } from "../../apiRequests/planRequests.js"
import { cleanInputStrings } from "../../apiRequests/dataCleaners.js"
import { secureCall } from "../../apiRequests/promiseHandling"

import { NavBar } from "../NavBar/NavBar"
import { TourCategory } from "./TourCategory"
import { TourStep } from "./TourStep"

import question from "../../assets/question-sign.svg"
import route from "../../assets/travel.svg"
import lightbulb from "../../assets/light-bulb (1).svg"

interface TourPlan {
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

export const PastTourDetails: React.FC<any> = ({ match, setErr }) => {
  const { getAccessTokenSilently } = useAuth0()

  const tourId = match.params.tourId
  const location = match.params.location
  const date = match.params.date

  const [pastTour, setPastTour] = useState<TourPlan>({
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

  useEffect(() => {
    secureCall(
      getAccessTokenSilently,
      setErr,
      getPlan,
      match.params.userId,
      null,
      tourId
    ).then((plan: any) =>
      setPastTour(cleanInputStrings(plan.data[0].attributes))
    )
  }, [getAccessTokenSilently, match.params.userId, setErr, tourId])

  return (
    <main className="background">
      <div className="sub-container">
        <div className="location">
          <h1>{location}</h1>
          <p className="date">{new Date(date).toDateString()}</p>
        </div>

        <section>
          <div className="title-wrapper">
            <img src={lightbulb} alt="lightbulb" className="form-icon" />
            <h2>PLAN your trip</h2>
          </div>

          <article className="border">
            <TourCategory title={"Anticipate The Hazard"} />
            <TourStep
              description={
                "Discuss current & forecast weather factors that can affect travel or hazard:"
              }
              inputProp={pastTour.hazard_weather}
            />
            <TourStep
              description={
                "Identify the avalanche problem and location. Discuss the danger trend and timing:"
              }
              inputProp={pastTour.hazard_avalanche}
            />
            <TourStep
              description={"Discuss the advisory's key message:"}
              inputProp={pastTour.hazard_summary}
            />
          </article>

          <article className="border">
            <TourCategory title={"Plan Your Route"} />
            <TourStep
              description={"Preview Terrain:"}
              inputProp={pastTour.route_preview}
            />
            <TourStep
              description={"Alternate Route:"}
              inputProp={pastTour.route_alternative}
            />
          </article>

          <article className="border">
            <TourCategory title={"Discuss Your Emergency Plan"} />
            <TourStep inputProp={pastTour.emergency_plan} />
          </article>
        </section>

        <section>
          <div className="title-wrapper">
            <img src={route} alt="route" className="form-icon" />
            <h2>RIDE safely</h2>
          </div>

          <article className="border">
            <TourCategory title={"Conduct a Departure Check"} />
          </article>
        </section>

        <section>
          <div className="title-wrapper">
            <img src={question} alt="question mark" className="form-icon" />
            <h2>DEBRIEF</h2>
          </div>

          <article className="border">
            <TourCategory title={"Summarize Conditions"} />
            <TourStep inputProp={pastTour.debrief_conditions} />
          </article>

          <article className="border">
            <TourCategory title={"Review Decisions"} />
            <TourStep inputProp={pastTour.debrief_decisions} />
          </article>

          <article className="border">
            <TourCategory title={"Improve Your Plan"} />
            <TourStep inputProp={pastTour.debrief_plan} />
          </article>
        </section>
      </div>

      <NavBar />
    </main>
  )
}
