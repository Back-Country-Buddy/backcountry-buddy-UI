import React from 'react'
import './PastTours.css'
import question from '../../assets/question-sign.svg'
import route from '../../assets/travel.svg'
import lightbulb from '../../assets/light-bulb (1).svg'

interface tourPlan {
  id: number;
  tourId: number;
  hazardWeather: string;
  hazardAvalanche: string;
  hazardSummary: string;
  routePreview: string;
  routeAlternative: string;
  emergencyPlan: string;
  rideObservations: string;
  debriefConditions: string;
  debriefDecisions: string;
  debriefPlan: string;
}

interface TourDetailsProps {
  tourPlans: Array<tourPlan>;
}

export const PastTourDetails: React.FC<TourDetailsProps> = ({tourPlans}) => {
  return (
    <section className='tour-details'>
      <div className='location'>
        <h1>Buffalo Mountain</h1>
        <p className='date'>Feb 2, 2021</p>
      </div>

    <section className='plan'>
      <div className='title-wrapper'>
        <img src={lightbulb}/>
        <h2 className='title'>PLAN your trip</h2>
      </div>
      <article className='plan-info'>
        <h3 className='category'>Anticipate The Hazard</h3>
        <h4 className='sub-category'>1) Discuss current & forecast weather factors that can affect travel or hazard</h4>
        <p className='tour-input'>{tourPlans[1].hazardWeather}</p>
        <h4 className='sub-category'>2) Identify the avalanche problem and location. Discuss the danger trend and timing</h4>
        <p className='tour-input'>{tourPlans[1].hazardAvalanche}</p>
        <h4 className='sub-category'>3) Discuss the advisory's key message</h4>
        <p className='tour-input'>{tourPlans[1].hazardSummary}</p>
      </article>
      <article className='plan-info'>
        <h3 className='category'>Plan Your Route</h3>
        <h4 className='sub-category'>1) Preview Terrain</h4>
        <p className='tour-input'>{tourPlans[1].routePreview}</p>
        <h4 className='sub-category'>2) Alternate Route</h4>
        <p className='tour-input'>{tourPlans[1].routeAlternative}</p>
      </article>
      <article className='plan-info'>
        <h3 className='category'>Discuss Your Emergency Plan</h3>
        <h4 className='sub-category'>1) Emergency Plan</h4>
        <p className='tour-input'>{tourPlans[1].emergencyPlan}</p>
      </article>
    </section>

    <section className='ride'>
      <div className='title-wrapper'>
        <img src={route}/>
        <h2 className='title'>RIDE safely</h2>
      </div>
      <article className='ride-info'>
        <h3 className='category'>Conduct a Departure Check</h3>
        <h4 className='sub-category'>1) Key Observations</h4>
        <p className='tour-input'>{tourPlans[1].rideObservations}</p>
      </article>
    </section>

    <section className='debrief'>
      <div className='title-wrapper'>
        <img src={question}/>
        <h2 className='title'>DEBRIEF</h2>
      </div>
      <article className='debrief-info'>
        <h3 className='category'>Summarize Conditions</h3>
        <p className='tour-input'>{tourPlans[1].debriefConditions}</p>
      </article>
      <article className='debrief-info'>
        <h3 className='category'>Review Decisions</h3>
        <p className='tour-input'>{tourPlans[1].debriefDecisions}</p>
      </article>
      <article className='debrief-info'>
        <h3 className='category'>Improve Plan</h3>
        <p className='tour-input'>{tourPlans[1].debriefPlan}</p>
      </article>
    </section>
    </section>
  )
}
