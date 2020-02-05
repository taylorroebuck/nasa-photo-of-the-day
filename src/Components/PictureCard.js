import React from "react";
import "../App.css";

const PictureCard = props => {
    console.log("picture card", props);
    return (
        <div className="picture-list">
            <img className="pod" src={props.mediaSRC}/>
            <div className="desc">
                {props.description}
            </div>
        </div>
    );
}

export default PictureCard;