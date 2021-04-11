import React, { useState, FunctionComponent } from 'react'
import { PastTourCard } from './PastTourCard'
import { SearchBar } from './SearchBar'
import { PastTourDetails } from './PastTourDetails'
import { tourPlan } from '../../tourPlan'
import './PastTours.css'

interface pastTour {
  id: number;
  date: string;
  location: string;
  creator_id: number;
  complete: boolean;
}

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

interface TourProps {
  pastTours: Array<pastTour>;
}

interface searchProps {
  filterTours: (input: string) => pastTour[];
}

export const PastTours: React.FC<TourProps> = ({ pastTours }) => {
  const [searchResults, setSearchResults] = useState<pastTour[]>(pastTours)

  const createPastTourCards = searchResults.map(tour => {
      return (
      <PastTourCard  
        key={tour.id}
        date={tour.date}
        location={tour.location}
      />
    )  
  })

  const filterTours = (input: string): any => {
   const filteredTours = pastTours.filter(tour => {
      return tour.location.includes(input)
  })
    setSearchResults([...filteredTours])
  }

  return (
    <section className='past-tours'>
      <PastTourDetails tourPlans={tourPlan}/>
      {/* <h1>Past Tours</h1> */}
      {/* <SearchBar filterTours={filterTours}/>
      {createPastTourCards} */}
    </section>
  )
}
