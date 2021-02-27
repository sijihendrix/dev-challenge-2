import React from "react";
import "./App.scss";
import { About } from "./sections/about/About";
import { Team } from "./sections/the-team/Team";
import { Footer } from "./sections/footer/Footer";

function App() {
  return (
    <div className="App">
      <About />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
