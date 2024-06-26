import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/cards";
import Cats from "./components/catCards";
import data from "./data";
import catdata from "./catdata";

// console.log(data);
// console.log(catdata);

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

  const catElements = catdata.map((kitty) => {
    return (
      <Cats
        image={kitty.image}
        name={kitty.name}
        age={kitty.age}
        color={kitty.color}
        gender={kitty.gender}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="card-list">{dataElements}</section>
      <section className="cats-list">{catElements}</section>
    </div>
  );
}

export default App;
