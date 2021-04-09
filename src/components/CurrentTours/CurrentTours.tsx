import React from 'react'
import CurrentTourCard from './CurrentTourCard'

interface Tour {
    id: number;
    date: string;
    location: string;
}

interface Props {
    currentTours: Array<Tour>;
}

export const CurrentTours: React.FC<Props> = ({ currentTours }) => {
    const tours = currentTours.map(tour => {
        return (
            <CurrentTourCard 
                key={tour.id}
                date={tour.date}
                location={tour.location}
            />
        )
    })
    return (
        <div>
            <h1>Current Tours</h1>
            {tours}
        </div>
    )
}
