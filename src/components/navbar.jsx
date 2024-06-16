import React from "react";
import airbnbLogo from "../assets/airbnb-1.png";

export default function Navbar() {
  return (
    <nav>
      <img className="logo-img" src={airbnbLogo} alt="Airbnb Logo" />
    </nav>
  );
}
