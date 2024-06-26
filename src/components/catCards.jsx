import React from "react";

export default function Cats(theCats) {
  return (
    <div className="cat-section">
      <img className="cat-image" src={theCats.image} />
      <div className="cat-details">
        <p className="cat-name">{theCats.name}</p>
        <p className="cat-age">{theCats.age}</p>
        <p className="cat-color">{theCats.color}</p>
        <p className="cat-gender">{theCats.gender}</p>
      </div>
    </div>
  );
}
