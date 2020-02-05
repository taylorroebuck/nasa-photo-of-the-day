import React from "react";

const PictureCard = props => {
    console.log(props);
    return (
        <div className="picture-list">
            <img src={props.mediaSRC}/>
            <div>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default PictureCard;