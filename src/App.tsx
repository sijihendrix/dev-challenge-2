import React from "react";
import "./App.scss";
import { About } from "./sections/about/About";
import { Team } from "./sections/the-team/Team";

function App() {
  return (
    <div className="App">
      <About />
      <Team />
    </div>
  );
}

export default App;
