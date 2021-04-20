import React, { useState } from "react"
import "./PastTours.css"
import searchIcon from "../../assets/icons8-search-30.png"

interface PastTour {
  id: number
  date: string
  location: string
  creator_id: number
  complete: boolean
}

interface SearchProps {
  filterTours: (input: string) => PastTour[]
}

export const SearchBar: React.FC<SearchProps> = ({ filterTours }) => {
  const [input, setInput] = useState<string>("")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
    filterTours(event.target.value)
  }

  return (
    <form className="search-input">
      <div className="search-bar">
        <img className="search-icon" src={searchIcon} alt="search icon" />
        <input
          type="text"
          name="search"
          className="search-box"
          placeholder="Search by location"
          value={input}
          onChange={(event) => handleChange(event)}
        />
      </div>
    </form>
  )
}
