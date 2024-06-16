import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/cards";

import "./app.scss";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
    </div>
  );
}

export default App;
