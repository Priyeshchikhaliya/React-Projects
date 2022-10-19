import React from "react";
import "./Review.css";
import ProfileImage from "../assets/image 22.png";
export default function Review() {
  return (
    <div className="main-rev-container">
      <div className="title-rev-container">Look What our clients say</div>{" "}
      <div className="rev-desc-container">
        <div className="profileImage">
          <img className="ProIMG" src={ProfileImage} alt="profile" />
        </div>
        <div className="rev-text-1">
          <div className="rev-header">Cheng-Han Lee</div>
          <div className="rev-desc-header">
            Regional Controlling & Planning Process Lead at Hitachi Energy
          </div>
        </div>
        <div>
          <p className="rev-text-2">
            I had the pleasure and opportunity to work with Anubhav at Upgrad.
            Anubhav demonstrated the ability to leverage his expertise to
            quickly ramp up on technical challenging projects and immediately
            established himself as one of the most technically capable members
            on the team. Also Anubhav was a great team player. He was willing to
            help other team members whenever they needed help, and he always did
            so with a smile. With this said, I can confidently recommend Anubhav
            to any company looking to hire a collaborative and technically
            strong contributor.
          </p>
        </div>
      </div>
    </div>
  );
}
