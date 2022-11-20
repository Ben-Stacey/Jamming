import logo from './logo.svg';
import './App.css';
import Playlist from './Playlist.html'
import SearchBar from './SearchBar.html'
import SearchResults from './SearchResults.html'
import App from './App.css'
import React from 'react';

class App extends React.Component {
  constructor(){
    super(props)
    
    this.state = {
      searchResults: [],
      playlistName: 'playListName1',
      playlistTracks: []      
    };

    this.state.searchResults = state
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  state = {
    id : id,
    name : name,
    artist, artist,
    album, album
  };

  addTrack(track){
    if(this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)){
      return;
    }
  }

  removeTrack(track){
    let filteredTrack = this.state.playlistTracks.filter(track => track.id !== this.removeTrack.id)
    this.setState({playlistTracks: filteredTrack});
  }

  render() {
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={this.search} />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onSearch={this.search} onAdd={this.addTrack} />
          <Playlists 
            playlistName={this.state.playListName}
            playlistTracks={this.state.playlistTracks}
            onRemove={this.removeTrack}
            onNameChange={this.updatePlaylistName}
            onSave={this.savePlaylist}
          />
        </div>
      </div>
    </div>
    );
  }
}

export default App;

/**
 * function App() {
  constructor(){
    super(
  }

  return (
    <div>
      <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div class="App">
         
          <div class="App-playlist">
            
          </div>
        </div>
    </div>
  );
}

 */
