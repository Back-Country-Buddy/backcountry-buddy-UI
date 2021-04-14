import React, { useState } from "react"
import "./PastTours.css"

interface pastTour {
  id: number
  date: string
  location: string
  creator_id: number
  complete: boolean
}

interface searchProps {
  filterTours: (input: string) => pastTour[]
}

export const SearchBar: React.FC<searchProps> = ({ filterTours }) => {
  const [input, setInput] = useState<string>("")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
    filterTours(event.target.value)
  }

  return (
    <form className="search-input">
      <input
        type="text"
        name="input"
        placeholder="Search By Location"
        value={input}
        onChange={(event) => handleChange(event)}
      />
    </form>
  )
}
