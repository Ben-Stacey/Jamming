import React from "react";
import TrackList from "../TrackList/TrackList";
import './SearchResults.css';

class SearchResults extends React.Component{
    render(){
        tracks = this.props.searchResults
        return(
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList tracks={'this.props.searchResulta'} onAdd={this.add.onAdd} isRemoval={false}></TrackList>
            </div>
        )
    }
}

export default SearchResults