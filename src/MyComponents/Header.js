import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

// Top nav bar with search
export default function Header(props) {
    const [searchText, setSearchText] = useState("");

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        props.onSearch(searchText);
    };

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
        if (e.target.value === "") {
            props.setIsSearching(false);
        }
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
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

// Basic props setup
Header.defaultProps = {
    title: "Your Title Here",
    searchBar: true
}

Header.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired,
    onSearch: PropTypes.func,
    setIsSearching: PropTypes.func
}
