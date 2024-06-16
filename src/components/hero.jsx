import React from "react";
import image from "../assets/Group-img.jpg";

export default function Hero() {
  return (
    <section className="hero-section">
      <img src={image} />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
