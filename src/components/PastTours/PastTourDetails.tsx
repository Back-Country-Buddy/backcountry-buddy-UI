import React from 'react'

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
  console.log(tourPlans)
  return (
    <section className='tour-details'>
      <div className='title'>
        <h1>Buffalo Mountain</h1>
        <p className='date'>Feb 2, 2021</p>
      </div>

    <section className='plan'>
      <h2>Plan</h2>
      <article className='plan-info'>
        <h3>Anticipate The Hazard</h3>
        <h4>1) Discuss current & forecast weather factors that can affect travel or hazard</h4>
        <p>{tourPlans[1].hazardWeather}</p>
        <h4>2) Identify the avalanche problem and location. Discuss the danger trend and timing</h4>
        <p>{tourPlans[1].hazardAvalanche}</p>
        <h4>3) Discuss the advisory's key message</h4>
        <p>{tourPlans[1].hazardSummary}</p>
      </article>
      <article className='plan-info'>
        <h3>Plan Your Route</h3>
        <h4>1) Preview Terrain</h4>
        <p>{tourPlans[1].routePreview}</p>
        <h4>2) Alternate Route</h4>
        <p>{tourPlans[1].routeAlternative}</p>
      </article>
      <article className='plan-info'>
        <h3>Discuss Your Emergency Plan</h3>
        <h4>1) Emergency Plan</h4>
        <p>{tourPlans[1].emergencyPlan}</p>
      </article>
    </section>

    <section className='ride'>
      <h2>Ride</h2>
      <article className='ride-info'>
        <h3>Conduct a Departure Check</h3>
        <h4>1) Key Observations</h4>
        <p>{tourPlans[1].rideObservations}</p>
      </article>
    </section>

    <section className='debrief'>
      <h2>Debrief</h2>
      <article className='debrief-info'>
        <h3>Summarize Conditions</h3>
        <p>{tourPlans[1].debriefConditions}</p>
      </article>
      <article className='debrief-info'>
        <h3>Review Decisions</h3>
        <p>{tourPlans[1].debriefDecisions}</p>
      </article>
      <article className='debrief-info'>
        <h3>Improve Plan</h3>
        <p>{tourPlans[1].debriefPlan}</p>
      </article>
    </section>
    </section>
  )
}
