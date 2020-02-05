import React from "react";
import PictureList from "./Components/PictureList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="logo_container">
        <h1>Photo of the Day</h1>
        <PictureList />
      </div>
    </div>
  );
}

export default App;
