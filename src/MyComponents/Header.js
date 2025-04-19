import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

// Navigation bar component with search functionality
export default function Header(props) {
    // Keep track of what user types in search
    const [searchText, setSearchText] = useState("")

    // Handle search form submission
    const handleSearchSubmit = (e) => {
        e.preventDefault()
        props.onSearch(searchText)
    }

    // Update search as user types and clear search when empty
    const handleSearchChange = (e) => {
        setSearchText(e.target.value)
        if (e.target.value === "") {
            props.setIsSearching(false)
        }
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                {/* Site title/brand */}
                <Link className="navbar-brand" to="/">{props.title}</Link>

                {/* Mobile menu button */}
                <button className="navbar-toggler" type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* Navigation links */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>

                    {/* Search form - only shows if searchBar prop is true */}
                    {props.searchBar ? 
                        <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
                            <input 
                                className="form-control me-2" 
                                type="search" 
                                placeholder="Search" 
                                aria-label="Search"
                                value={searchText}
                                onChange={handleSearchChange}
                            />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> 
                    : null}
                </div>
            </div>
        </nav>
    )
}

// Default values for props
Header.defaultProps = {
    title: "Your Title Here",
    searchBar: true
}

// Type checking for props
Header.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired,
    onSearch: PropTypes.func,
    setIsSearching: PropTypes.func
}
