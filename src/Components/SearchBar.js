import React from 'react'
import './SearchBar.css';

const SearchBar = (props) => {

    return (
        <div className="search-container">
            <input className="search-bar" placeholder="Enter product name here" onChange={props.handleChange} />
            <button className="search-button" onClick={props.handleSearchClick}>Search</button>
        </div>
    )
}

export default SearchBar
