import React from "react";
import "./Clients.css";
export default function Clients() {
  let arrayImage = [
    { path: require("../Brands/image2.png") },
    { path: require("../Brands/image 4.png") },
    { path: require("../Brands/image 5.png") },
    { path: require("../Brands/image 3.png") },
    { path: require("../Brands/image 13.png") },
    { path: require("../Brands/image 17.png") },
    { path: require("../Brands/image 16.png") },
    { path: require("../Brands/image 14.png") },
    { path: require("../Brands/image 8.png") },
    { path: require("../Brands/image 19.png") },
    { path: require("../Brands/image 10.png") },
    { path: require("../Brands/image 12.png") },
    { path: require("../Brands/image 6.png") },
    { path: require("../Brands/image 18.png") },
    { path: require("../Brands/image 11.png") },
  ];
  return (
    <div className="main-client-container">
      <div className="title-client-container">Our Clients</div>
      <div className="brand-container">
        {arrayImage.map((p, i) => {
          return (
            <div className="brand-block">
              <img src={p.path} alt="brand"></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}
