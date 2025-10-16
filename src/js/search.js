import React from "react";


function Search({searchRequest, setSearchRequest}) {

    return (
        <div className="search-box">
            <input 
                type="text" placeholder="Пошук" className="search"
                value={searchRequest} 
                onChange={e => setSearchRequest(e.target.value)}
            />
            <span className="clear-search" onClick={e => setSearchRequest('')}>x</span>
        </div>
    )
}

export default Search;