import React from "react";
import "./HeroImage.css";
import StudentImage from "../assets/Student.png";
export default function HeroImage() {
  return (
    <div className="main-container">
      <div className="desc-div">
        <div className="head">
          <p>Get your business challenges solved</p>
        </div>
        <div className="subtitle">
          <p>
            We provide solutions through our consulting, marketing and web
            development skills for long-term profitability.
          </p>
        </div>
        <div >
          <button className="GTbutton">Get in Touch</button>
        </div>
      </div>
      <div className="image-container">
        <img src={StudentImage} alt="fireSpot" />
      </div>
    </div>
  );
}
