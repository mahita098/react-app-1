import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/cards";
import data from "./data";

console.log(data);

import "./app.scss";

function App() {
  const dataElements = data.map((item) => {
    return (
      <Card
        img={item.img}
        rating={item.rating}
        reviewCount={item.reviewCount}
        country={item.country}
        title={item.title}
        price={item.price}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="card-list">{dataElements}</section>
    </div>
  );
}

export default App;
