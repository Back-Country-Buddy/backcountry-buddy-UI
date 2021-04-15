import React, { useState } from "react"
import { RouteComponentProps } from "react-router-dom"
import "./PastTours.css"
import purpCheck from '../../assets/purpblue.png'
import circleCheck from '../../assets/purplebluecircle.png'
import arrow from '../../assets/arrow.png'

import question from "../../assets/question-sign.svg"
import route from "../../assets/travel.svg"
import lightbulb from "../../assets/light-bulb (1).svg"
import {NavBar} from '../NavBar/NavBar'

import { tourPlans } from "../../mockdata/tourPlan"

interface tourPlan {
  id: number
  tourId: number
  hazardWeather: string
  hazardAvalanche: string
  hazardSummary: string
  routePreview: string
  routeAlternative: string
  emergencyPlan: string
  rideObservations: string
  debriefConditions: string
  debriefDecisions: string
  debriefPlan: string
}

interface TParams {
  id: string
}

export const PastTourDetails: React.FC<RouteComponentProps<TParams>> = ({
  match,
}) => {
  const id = match.params.id.split("")[1]
  const tour = tourPlans.find((tour) => tour.tourId === parseInt(id))

  const [currentTour] = useState<tourPlan>(
    tour
      ? tour
      : {
          id: 0,
          tourId: 0,
          hazardWeather: "",
          hazardAvalanche: "",
          hazardSummary: "",
          routePreview: "",
          routeAlternative: "",
          emergencyPlan: "",
          rideObservations: "",
          debriefConditions: "",
          debriefDecisions: "",
          debriefPlan: "",
        }
  )

  return (
    <main className="tour-details">
      <div className="location">
        <h1>Buffalo Mountain</h1>
        <p className="date">Feb 2, 2021</p>
      </div>
      <div className='plan-wrapper'>
        <div className='border-wrapper'>
          <section className="plan">
            <div className="title-wrapper">
              <img src={lightbulb} alt="lightbulb" className="form-icon" />
              <h2 className="title">PLAN your trip</h2>
            </div>
            <article className="plan-info">
              <div className='category-wrapper'>
                <img src={circleCheck} alt="checkmark" className="check-icon" />
                <h3 className="category">Anticipate The Hazard</h3>
              </div>
              <div className='sub-wrapper'>
                <h4 className="sub-category">
                <img src={arrow} alt="right-arrow-icon" className="arrow-icon" />
                  Discuss current & forecast weather factors that can affect travel
                  or hazard
                </h4>
              </div>
              <div className='input-wrapper'>
                <p className="tour-input">{currentTour.hazardWeather}</p>
              </div>
              <div className='sub-wrapper'>
                <h4 className="sub-category">
                <img src={arrow} alt="right-arrow-icon" className="arrow-icon" /> 
                  Identify the avalanche problem and location. Discuss the danger
                  trend and timing
                </h4>
              </div>
              <div className='input-wrapper'>
                <p className="tour-input">{currentTour.hazardAvalanche}</p>
              </div>
              <div className='sub-wrapper'>
                <img src={arrow} alt="right-arrow-icon" className="arrow-icon" /> 
                <h4 className="sub-category">Discuss the advisory's key message</h4>
              </div>
              <div className='input-wrapper'>
                <p className="tour-input">{currentTour.hazardSummary}</p>
              </div>
            </article>
            <article className="plan-info">
              <div className='category-wrapper'>
                <img src={circleCheck} alt="checkmark" className="check-icon" />
                <h3 className="category">Plan Your Route</h3>
              </div>
              <div className='sub-wrapper'>
                <img src={arrow} alt="right-arrow-icon" className="arrow-icon" /> 
                <h4 className="sub-category">Preview Terrain</h4>
              </div>
              <div className='input-wrapper'>
                <p className="tour-input">{currentTour.routePreview}</p>
              </div>
              <div className='sub-wrapper'>
                <img src={arrow} alt="right-arrow-icon" className="arrow-icon" /> 
                <h4 className="sub-category">Alternate Route</h4>
              </div>
              <div className='input-wrapper'>
                <p className="tour-input">{currentTour.routeAlternative}</p>
              </div>
            </article>
            <article className="plan-info">
              <div className='category-wrapper'>
                <img src={circleCheck} alt="checkmark" className="check-icon" />
                <h3 className="category">Discuss Your Emergency Plan</h3>
              </div>
              <div className='sub-wrapper'>
                <img src={arrow} alt="right-arrow-icon" className="arrow-icon" /> 
                <h4 className="sub-category">Emergency Plan</h4>
              </div>
              <div className='input-wrapper'>
                <p className="tour-input">{currentTour.emergencyPlan}</p>
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
            <div className='category-wrapper'>
              <img src={circleCheck} alt="checkmark" className="check-icon" />
              <h3 className="category">Conduct a Departure Check</h3>
            </div>
            <div className='sub-wrapper'>
              <img src={arrow} alt="right-arrow-icon" className="arrow-icon" />
              <h4 className="sub-category">Key Observations</h4>
            </div>
            <div className='input-wrapper'>
              <p className="tour-input">{currentTour.rideObservations}</p>
            </div>
          </article>
        </section>

        <section className="debrief">
          <div className="title-wrapper">
            <img src={question} alt="question mark" className="form-icon" />
            <h2 className="title">DEBRIEF</h2>
          </div>
          <article className="debrief-info">
            <div className='category-wrapper'>
              <img src={circleCheck} alt="checkmark" className="check-icon" />
              <h3 className="category">Summarize Conditions</h3>
            </div>
            <div className='input-wrapper'>
              <p className="tour-input">{currentTour.debriefConditions}</p>
            </div>
          </article>
          <article className="debrief-info">
            <div className='category-wrapper'>
              <img src={circleCheck} alt="checkmark" className="check-icon" />
              <h3 className="category">Review Decisions</h3>
            </div>
            <div className='input-wrapper'>
              <p className="tour-input">{currentTour.debriefDecisions}</p>
            </div>
          </article>
          <article className="debrief-info">
            <div className='category-wrapper'>
              <img src={circleCheck} alt="checkmark" className="check-icon" />
              <h3 className="category">Improve Your Plan</h3>
            </div>
            <div className='input-wrapper'>
              <p className="tour-input">{currentTour.debriefPlan}</p>
            </div>
          </article>
        </section>
      </div>
    </main>
  )
}
