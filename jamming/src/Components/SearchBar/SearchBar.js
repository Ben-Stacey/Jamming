import Playlist from './Playlist.html';
import Track from './Track.html';
import React from 'react';
import { ReactDOM } from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{

  render(){
    return {
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" />
        <button className="SearchButton">SEARCH</button>
      </div>
    }
  }
}

export default SearchBar;