import React from "react"
import "./PastTours.css"
import searchIcon from "../../assets/icons8-search-30.png"

interface SearchProps {
  searchQuery: string
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
}

export const SearchBar: React.FC<SearchProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <form className="search-input" onSubmit={(event) => event.preventDefault()}>
      <div className="search-bar">
        <img className="search-icon" src={searchIcon} alt="search icon" />
        <input
          type="search"
          name="search"
          className="search-box"
          placeholder="Search by location"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </form>
  )
}
