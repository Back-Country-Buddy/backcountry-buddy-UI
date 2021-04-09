import React from 'react'

interface Props {
  date: string;
  location: string;
}

const CurrentTourCard: React.FC<Props> = ({ date, location }) => {
  return (
    <article>
      <h3>{location}</h3>
      <h3>{date}</h3>
    </article>
  )
}

export default CurrentTourCard