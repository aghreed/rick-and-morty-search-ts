import * as React from "react";
import "./Search.css";

interface ISearchProps {
    onSearch(query: object): void;
    onQueryChange(event: any): void;
    onResourceChange(event: any): void;
}

const Search: React.SFC<ISearchProps> = ({ onSearch, onResourceChange, onQueryChange }) => (
    <div className="search-container">
        <div className="search-resource">
            <label>Search the names of Rick and Morty based</label>
            <select onChange={onResourceChange} defaultValue="character">
                <option value="character">characters</option>
                <option value="location">locations</option>
                <option value="episode">episodes</option>
            </select>
        </div>
        <div className="search-query">
            <input type="text" name="query" placeholder="Rick Sanchez" onChange={onQueryChange as any} />
            <button className="search-button" type="button" onClick={onSearch}>Search</button>
        </div>
    </div>
);

export default Search;