import React from "react";
import "../css/App.scss";
import data from "../data/giphy";
import MainContainer from "./MainContainer";
import Preview from "./Preview";

function App() {
  return (
    <div className="App">
      <MainContainer></MainContainer>
      <Preview data={data[0].images.original.url} />
    </div>
  );
}

export default App;
