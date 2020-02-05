import React, { useState, useEffect } from "react";
import PictureCard from "./PictureCard";
import axios from "axios";

function PictureList() {
    const [pictures, setPictures] = useState("");
    const [date, setDate] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=owXJS9WrS6qKn9GvJtFkgkvPQpfRArqJtzrsY2Ms")
        .then(response => {
            console.log(response.data);
            setPictures(response.data.hdurl);
            setDate(response.data.date);
            setTitle(response.data.title);
            setDescription(response.data.explanation);
        })
        .catch(error => {
            console.log("the data was not returned", error);
        });
    }, []);

    return(
        <div className="picture">
<h2>Title: {title}</h2>
                    <PictureCard 
                    mediaSRC={pictures} description={description}


                    />
        </div>
    );
}

export default PictureList;