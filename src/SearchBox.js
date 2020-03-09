import React from "react";
const SearchBox = ({ searhChange }) => {
    return (
        <div className="pa2">
            <input 
            className="pa3 ba b--green bg-lightest-blue" 
            type="search" 
            placeholder="search robots"
            onChange={searhChange}
            />
        </div>
    )
}
    
export default SearchBox;