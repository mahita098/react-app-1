import React from "react";
import cardimg1 from "../assets/skz1.jpg";
import star from "../assets/star.png";

export default function Card() {
  return (
    <div className="card">
      <img src={cardimg1} className="card--image" />
      <div className="card--stats">
        <img src={star} className="card--star" />
        <span>5.0</span>
        <span className="gray">(6) • </span>
        <span className="gray">USA</span>
      </div>
      <p>Stray kids Tours</p>
      <p>
        <span className="bold">From $136 </span> / person
      </p>
    </div>
  );
}
