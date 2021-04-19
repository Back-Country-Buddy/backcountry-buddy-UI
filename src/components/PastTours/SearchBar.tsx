import React, { useState } from "react"
import "./PastTours.css"

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
    <div className="search-wrapper">
      <form className="search-input">
        <input
          type="text"
          name="input"
          placeholder="Search By Location"
          value={input}
          onChange={(event) => handleChange(event)}
        />
      </form>
    </div>
  )
}
