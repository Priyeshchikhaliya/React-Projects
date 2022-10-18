import React from "react";
import "./Clients.css";
export default function Clients() {
  let arrayImage = [
    { path: "../assets/Brands/image 2.png" },
    { path: "../assets/Brands/image 4.png" },
    { path: "../assets/Brands/image 5.png" },
    { path: "../assets/Brands/image 3.png" },
    { path: "../assets/Brands/image 13.png" },
    { path: "../assets/Brands/image 17.png" },
    { path: "../assets/Brands/image 16.png" },
    { path: "../assets/Brands/image 14.png" },
    { path: "../assets/Brands/image 8.png" },
    { path: "../assets/Brands/image 19.png" },
    { path: "../assets/Brands/image 10.png" },
    { path: "../assets/Brands/image 12.png" },
    { path: "../assets/Brands/image 6.png" },
    { path: "../assets/Brands/image 18.png" },
    { path: "../assets/Brands/image 11.png" },
  ];
  return (
    <div className="navbar">
      <div className="title-container"></div>
      <div className="brand-container">
        {arrayImage.map((p, i) => {
          return <img key={i} src={p.path} alt="image" />;
        })}
              
      </div>
      <img src="../assets/Brands/image 10.png"/>
    </div>
  );
}
