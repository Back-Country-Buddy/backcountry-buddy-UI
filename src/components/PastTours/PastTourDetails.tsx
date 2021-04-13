import React, {useState, useEffect} from 'react'
import './PastTours.css'
import question from '../../assets/question-sign.svg'
import route from '../../assets/travel.svg'
import lightbulb from '../../assets/light-bulb (1).svg'
import { tourPlans } from '../../mockdata/tourPlan'
import { RouteComponentProps } from 'react-router-dom'

interface tourPlan {
  id: number,
  tourId: number,
  hazardWeather: string,
  hazardAvalanche: string,
  hazardSummary: string,
  routePreview: string,
  routeAlternative: string,
  emergencyPlan: string,
  rideObservations: string,
  debriefConditions: string,
  debriefDecisions: string,
  debriefPlan: string
}

interface TParams {
  id: string
}


export const PastTourDetails: React.FC<RouteComponentProps<TParams>> = ({ match }) => {
  const id = match.params.id.split('')[1]
  const tour = tourPlans.find(tour => tour.tourId === parseInt(id))

  const [currentTour, setCurrentTour] = useState<tourPlan>(
    tour ? tour : {
      id: 0,
      tourId: 0,
      hazardWeather: '',
      hazardAvalanche: '',
      hazardSummary: '',
      routePreview: '',
      routeAlternative: '',
      emergencyPlan: '',
      rideObservations: '',
      debriefConditions: '',
      debriefDecisions: '',
      debriefPlan: ''
    }
  )

  return (
    <section className='tour-details'>
      <div className='location'>
        <h1>Buffalo Mountain</h1>
        <p className='date'>Feb 2, 2021</p>
      </div>

    <section className='plan'>
      <div className='title-wrapper'>
        <img src={lightbulb} alt="lightbulb" />
        <h2 className='title'>PLAN your trip</h2>
      </div>
      <article className='plan-info'>
        <h3 className='category'>Anticipate The Hazard</h3>
        <h4 className='sub-category'>1) Discuss current & forecast weather factors that can affect travel or hazard</h4>
        <p className='tour-input'>{currentTour.hazardWeather}</p>
        <h4 className='sub-category'>2) Identify the avalanche problem and location. Discuss the danger trend and timing</h4>
        <p className='tour-input'>{currentTour.hazardAvalanche}</p>
        <h4 className='sub-category'>3) Discuss the advisory's key message</h4>
        <p className='tour-input'>{currentTour.hazardSummary}</p>
      </article>
      <article className='plan-info'>
        <h3 className='category'>Plan Your Route</h3>
        <h4 className='sub-category'>1) Preview Terrain</h4>
        <p className='tour-input'>{currentTour.routePreview}</p>
        <h4 className='sub-category'>2) Alternate Route</h4>
        <p className='tour-input'>{currentTour.routeAlternative}</p>
      </article>
      <article className='plan-info'>
        <h3 className='category'>Discuss Your Emergency Plan</h3>
        <h4 className='sub-category'>1) Emergency Plan</h4>
        <p className='tour-input'>{currentTour.emergencyPlan}</p>
      </article>
    </section>

    <section className='ride'>
      <div className='title-wrapper'>
        <img src={route} alt="route" />
        <h2 className='title'>RIDE safely</h2>
      </div>
      <article className='ride-info'>
        <h3 className='category'>Conduct a Departure Check</h3>
        <h4 className='sub-category'>1) Key Observations</h4>
        <p className='tour-input'>{currentTour.rideObservations}</p>
      </article>
    </section>

    <section className='debrief'>
      <div className='title-wrapper'>
        <img src={question} alt="question mark"/>
        <h2 className='title'>DEBRIEF</h2>
      </div>
      <article className='debrief-info'>
        <h3 className='category'>Summarize Conditions</h3>
        <p className='tour-input'>{currentTour.debriefConditions}</p>
      </article>
      <article className='debrief-info'>
        <h3 className='category'>Review Decisions</h3>
        <p className='tour-input'>{currentTour.debriefDecisions}</p>
      </article>
      <article className='debrief-info'>
        <h3 className='category'>Improve Plan</h3>
        <p className='tour-input'>{currentTour.debriefPlan}</p>
      </article>
    </section>
    </section>
  )
}
