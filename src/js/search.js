import React from "react";


function Search({searchRequest, setSearchRequest}) {

    return (
        <div>
            <label htmlFor="search">
                <input 
                    type="text" placeholder="Пошук" className="search"
                    value={searchRequest} 
                    onChange={e => setSearchRequest(e.target.value)}
                />
                <div onClick={e => setSearchRequest('')}>X</div>
            </label>
        </div>
    )
}

export default Search;