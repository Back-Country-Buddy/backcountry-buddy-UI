'@ts-ignore'
import React, { useState, FunctionComponent } from 'react'
import { PastTourCard } from './PastTourCard'
import { SearchBar } from './SearchBar'
import { PastTourDetails } from './PastTourDetails'
import { tourPlans } from '../../mockdata/tourPlan'
import { Route, RouteComponentProps } from 'react-router-dom'
import './PastTours.css'

interface pastTour {
  id: number;
  date: string;
  location: string;
  creator_id: number;
  complete: boolean;
}

interface TourProps {
  pastTours: Array<pastTour>;
}

interface searchProps {
  filterTours: (input: string) => pastTour[];
}

type TParams = { id: string }

// export interface RouteComponentProps<Params extends { [K in keyof Params]?: string } = {}, C extends StaticContext = StaticContext, S = H.LocationState> {

//   match: match<Params>;
// }

export const PastTours: React.FC<TourProps> = ({ pastTours }) => {
  const [searchResults, setSearchResults] = useState<pastTour[]>(pastTours)

  const createPastTourCards = searchResults.map(tour => {
      return (
      <PastTourCard  
        key={tour.id}
        id={tour.id}
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
      <h1>Past Tours</h1> 
      <SearchBar filterTours={filterTours}/>
      {createPastTourCards}
      {/* < Route 
        path='/tour-details/:id'
        render={({ match }: RouteComponentProps<TParams>)=> {
          return <PastTourDetails id={match.params.id} tourPlans={tourPlans}/>
        }
        }
      /> */}

    </section>
  )
}
