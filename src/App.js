import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Date from "./Components/Date";
import Title from "./Components/Title";
import Image from "./Components/Image";
import styled from "styled-components";

const LogoContainer = styled.div`
  width: 30%;
  background: #0b3d91;
`;

const Heading = styled.h1`
  color: white;
`;

function App() {
  const [nasaData, setNasaData] = useState([]);
  const [date, setDate] = useState("");
  
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=t5gHMLnB9lijRBpavUdSI9c1cc3J82mHj9Fy6C0U${date}`
      )
      .then(res => {
        console.log(res.data);
        setNasaData(res.data);
      })
      .then(console.log(nasaData))
      .catch(err => console.log(err));
  }, [ date ]);

  return (
    <div className="App">
      <LogoContainer>
        <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/s75-31690.jpeg" width="20%" alt="Nasa logo" />
      </LogoContainer>
      <Heading>NASA Photo Of The Day</Heading>
      <Date date={date} setDate={setDate} nasaData={nasaData} setNasaData={setNasaData} />
      <Title nasaData={nasaData} />
      <Image nasaData={nasaData} />
    </div>
  );
}

export default App;