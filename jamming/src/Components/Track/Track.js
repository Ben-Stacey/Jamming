import React from "react";
import './Track.css';

class Track extends React.Component{
    renderAction(){
        <button className="Track-action">-</button>
        <button className="Track-action">+</button>
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