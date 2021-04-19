import React, { useState, useEffect } from "react"
import { RouteComponentProps } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"

import "./PastTours.css"

import { getPlan, cleanInputStrings } from "../../util.js"

import circleCheck from "../../assets/purplebluecircle.png"
import arrow from "../../assets/arrow.png"
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

interface TParams {
  userId: string
  tourId: string
  location: string
  date: string
}

export const PastTourDetails: React.FC<RouteComponentProps<TParams>> = ({
  match,
}) => {
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
    if (tourId.length && match) {
      getAccessTokenSilently().then((token) =>
        getPlan(token, match.params.userId, tourId).then((plan) => {
          setPastTour(cleanInputStrings(plan.data[0].attributes))
        })
      )
    }
  }, [getAccessTokenSilently, tourId, match])

  return (
    <>
      <main className="tour-details">
        <div className="location">
          <h1>{location}</h1>
          <p className="date">{date}</p>
        </div>

        <div className="plan-wrapper">
          <div className="border-wrapper">
            <section className="plan">
              <div className="title-wrapper">
                <img src={lightbulb} alt="lightbulb" className="form-icon" />
                <h2 className="title">PLAN your trip</h2>
              </div>
              <article className="plan-info">
                <div className="category-wrapper">
                  <img
                    src={circleCheck}
                    alt="checkmark"
                    className="check-icon"
                  />
                  <h3 className="category">Anticipate The Hazard</h3>
                </div>
                <div className="sub-wrapper">
                  <h4 className="sub-category">
                    <img
                      src={arrow}
                      alt="right-arrow-icon"
                      className="arrow-icon"
                    />
                    Discuss current & forecast weather factors that can affect
                    travel or hazard
                  </h4>
                </div>
                <div className="input-wrapper">
                  <p className="tour-input">{pastTour.hazard_weather}</p>
                </div>
                <div className="sub-wrapper">
                  <h4 className="sub-category">
                    <img
                      src={arrow}
                      alt="right-arrow-icon"
                      className="arrow-icon"
                    />
                    Identify the avalanche problem and location. Discuss the
                    danger trend and timing
                  </h4>
                </div>
                <div className="input-wrapper">
                  <p className="tour-input">{pastTour.hazard_avalanche}</p>
                </div>
                <div className="sub-wrapper">
                  <img
                    src={arrow}
                    alt="right-arrow-icon"
                    className="arrow-icon"
                  />
                  <h4 className="sub-category">
                    Discuss the advisory's key message
                  </h4>
                </div>
                <div className="input-wrapper">
                  <p className="tour-input">{pastTour.hazard_summary}</p>
                </div>
              </article>
              <article className="plan-info">
                <div className="category-wrapper">
                  <img
                    src={circleCheck}
                    alt="checkmark"
                    className="check-icon"
                  />
                  <h3 className="category">Plan Your Route</h3>
                </div>
                <div className="sub-wrapper">
                  <img
                    src={arrow}
                    alt="right-arrow-icon"
                    className="arrow-icon"
                  />
                  <h4 className="sub-category">Preview Terrain</h4>
                </div>
                <div className="input-wrapper">
                  <p className="tour-input">{pastTour.route_preview}</p>
                </div>
                <div className="sub-wrapper">
                  <img
                    src={arrow}
                    alt="right-arrow-icon"
                    className="arrow-icon"
                  />
                  <h4 className="sub-category">Alternate Route</h4>
                </div>
                <div className="input-wrapper">
                  <p className="tour-input">{pastTour.route_alternative}</p>
                </div>
              </article>
              <article className="plan-info">
                <div className="category-wrapper">
                  <img
                    src={circleCheck}
                    alt="checkmark"
                    className="check-icon"
                  />
                  <h3 className="category">Discuss Your Emergency Plan</h3>
                </div>
                <div className="sub-wrapper">
                  <img
                    src={arrow}
                    alt="right-arrow-icon"
                    className="arrow-icon"
                  />
                  <h4 className="sub-category">Emergency Plan</h4>
                </div>
                <div className="input-wrapper">
                  <p className="tour-input">{pastTour.emergency_plan}</p>
                </div>
              </article>
            </section>
          </div>

          <section className="ride">
            <div className="title-wrapper">
              <img src={route} alt="route" className="form-icon" />
              <h2 className="title">RIDE safely</h2>
            </div>
            <article className="ride-info">
              <div className="category-wrapper">
                <img src={circleCheck} alt="checkmark" className="check-icon" />
                <h3 className="category">Conduct a Departure Check</h3>
              </div>
              <div className="sub-wrapper">
                <img
                  src={arrow}
                  alt="right-arrow-icon"
                  className="arrow-icon"
                />
                <h4 className="sub-category">Key Observations</h4>
              </div>
              <div className="input-wrapper">
                <p className="tour-input">Ride Observations</p>
              </div>
            </article>
          </section>

          <section className="debrief">
            <div className="title-wrapper">
              <img src={question} alt="question mark" className="form-icon" />
              <h2 className="title">DEBRIEF</h2>
            </div>
            <article className="debrief-info">
              <div className="category-wrapper">
                <img src={circleCheck} alt="checkmark" className="check-icon" />
                <h3 className="category">Summarize Conditions</h3>
              </div>
              <div className="input-wrapper">
                <p className="tour-input">{pastTour.debrief_conditions}</p>
              </div>
            </article>
            <article className="debrief-info">
              <div className="category-wrapper">
                <img src={circleCheck} alt="checkmark" className="check-icon" />
                <h3 className="category">Review Decisions</h3>
              </div>
              <div className="input-wrapper">
                <p className="tour-input">{pastTour.debrief_decisions}</p>
              </div>
            </article>
            <article className="debrief-info">
              <div className="category-wrapper">
                <img src={circleCheck} alt="checkmark" className="check-icon" />
                <h3 className="category">Improve Your Plan</h3>
              </div>
              <div className="input-wrapper">
                <p className="tour-input">{pastTour.debrief_plan}</p>
              </div>
            </article>
          </section>
        </div>
      </main>
    </>
  )
}
