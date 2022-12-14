import React from "react";
import './TrackList.css';
import Track from "../Track/Track";

class TrackList extends React.Component{
    
    render(){
        return(
            <div className="TrackList">
                {
                    this.props.tracks.map(track=> {
                        return <Track track={track} key={track.id} name={track.name} artist={track.artist} album={track.album} onAdd={this.props.onAdd} onRemove={this.props.onRemoval} isRemoval={this.props.isRemoval}></Track>
                    })
                }
            </div>
        )
    }
}

export default TrackList;