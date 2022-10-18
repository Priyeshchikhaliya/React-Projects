import React from "react";
import './Navbar.css'
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="title-container">
         Consult Anubhav
      </div>
      <div className="links-container">
        <div className="text-link-container">
          <p className="text-link">Services</p>
          <p className="text-link">Blog</p>
          <p className="text-link">About</p>
        </div>
        <div>
          <button className="contact-button">Contact</button>
        </div>
      </div>
    </div>
  );
}
