import React from "react";
import "./Business.css";
export default function Business() {
  return (
    <div className="main-busi-container">
      <div className="title-busi-container">We Help Businesses In</div>
      <div className="busi-desc-container">
        <div className="header">
          <div className="sub-header">Launching A Product</div>
          <div className="sub-desc-header">
            We have assisted several entrepreneurs from around the world in
            launching their first products.
          </div>
        </div>
        <div className="header">
          <div className="sub-header">Improving A Product</div>
          <div className="sub-desc-header">
            We are experts at diagnosing products and making actionable changes
            to meet business objectives!
          </div>
        </div>
        <div className="header">
          <div className="sub-header">Consulting</div>
          <div className="sub-desc-header">
            We provide strategy development, large scale implementation, process
            optimization, and new technology introduction.
          </div>
        </div>
      </div>
    </div>
  );
}
