import logo from './logo.svg';
import './App.css';
import Playlist from './Playlist.html'
import SearchBar from './SearchBar.html'
import SearchResults from './SearchResults.html'
import App from './App.css'
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: 'playListName1',
      playlistTracks: []      
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track){
    let tracks = this.state.playlistTracks;
    if(tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {      
      tracks.push(track);
      this.setState({playlistTracks: tracks});
    }
  }

  removeTrack(track){
    let filteredTrack = this.state.playlistTracks.filter(track => track.id !== this.removeTrack.id)
    this.setState({playlistTracks: filteredTrack});
  }

  updatePlaylistName(name){
    this.setState({playlistName: name})
  }

  savePlaylist(){
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackURIs).then(() => {
      this.setState({
          playListName: 'New Playlist',
          playlistTracks: []
        });
    })  
  }

  search(searchTerm){
    Spotify.search(searchTerm).then(searchResults => {
      this.setState({searchResults: searchResults})
    })
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
