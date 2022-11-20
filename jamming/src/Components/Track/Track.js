import React from "react";
import './Track.css';

class Track extends React.Component{
    constructor(props){
        super(props)
        this.addTrack() = this.addTrack.bind(this);
        this.removeTrack() = this.removeTrack.bind(this);
    }

    renderAction(){
        if(){
            <button className="Track-action" onClick={this.removeTrack}>-</button>
        }else{
            <button className="Track-action" onClick={this.addTrack}>+</button>
        }
    }

    addTrack() {
        this.props.onAdd(this.props.track);
    }

    removeTrack(){
        this.props.onRemove(this.props.track);
    }

    render(){
        return(
            <div className="Track">
                <div className="Track-information">
                <h3></h3>
                    <p></p>
                </div>
                    <button className="Track-action"></button>
            </div>
        )
    }
}

export default Track;