import React from 'react'
import './PastTours.css'

interface pastTour {
  id: number;
  date: string;
  location: string;
}

interface searchProps {
  filterTours: (input: string) => pastTour[];
}

export const SearchBar: React.FC<searchProps> = ({filterTours}) => {
  return (
    <form className='search-input'>
      <input
        name='input'
        placeholder='Search By Location'
      />
    </form>
  )
}


