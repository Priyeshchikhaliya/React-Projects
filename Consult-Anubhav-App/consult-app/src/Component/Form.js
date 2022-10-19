import React from "react";
import "./Form.css";
import { useState } from "react";

export default function Form() {
  const [info, setInfo] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Contact: "",
    About: "",
  });

  return (
    <div className="main-form-container">
      <div className="title-form-container">We Would Love To Help!!!</div>
      <div className="form-container">
        <form className="form">
          <label className="label">
            First Name
            <input
              className="input"
              required
              type="text"
              placeholder="First Name"
              value={info.FirstName}
              onChange={(e) => setInfo(e.target.value)}
            />
          </label>
          <label className="label">
            Last Name
            <input
              className="input"
              required
              type="text"
              placeholder="Last Name"
              value={info.LastName}
              onChange={(e) => setInfo(e.target.value)}
            />
          </label>
          <label className="label">
            Email ID
            <input
              className="input"
              required
              type="text"
              placeholder="Email"
              value={info.Email}
              onChange={(e) => setInfo(e.target.value)}
            />
          </label>
          <label className="label">
            Contact Number
            <input
              className="input"
              required
              type="text"
              placeholder="Contact"
              value={info.Contact}
              onChange={(e) => setInfo(e.target.value)}
            />
          </label>
          <label className="label">
            About Project
            <textarea
              className="input"
              required
              type="text"
              value={info.About}
              onChange={(e) => setInfo(e.target.value)}
            />
          </label>
        </form>
        <div className="attach">
          <div>
            {" "}
            <div className="label">Attachment</div>
            <div>link</div>
          </div>
          <div>
            <svg
              width="96"
              height="96"
              viewBox="0 0 96 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_378_87)">
                <rect
                  x="20"
                  y="18"
                  width="56"
                  height="56"
                  rx="8"
                  fill="white"
                  shape-rendering="crispEdges"
                />
                <path
                  d="M49.544 44.4561C48.7249 43.6373 47.6141 43.1774 46.456 43.1774C45.2978 43.1774 44.1871 43.6373 43.368 44.4561L40.279 47.5441C39.4599 48.3632 38.9997 49.4742 38.9997 50.6326C38.9997 51.791 39.4599 52.902 40.279 53.7211C41.0981 54.5402 42.2091 55.0004 43.3675 55.0004C44.5259 55.0004 45.6369 54.5402 46.456 53.7211L48 52.1771"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M46.456 47.5441C47.2751 48.3628 48.3858 48.8228 49.544 48.8228C50.7021 48.8228 51.8129 48.3628 52.632 47.5441L55.721 44.4561C56.5401 43.6369 57.0003 42.526 57.0003 41.3676C57.0003 40.2091 56.5401 39.0982 55.721 38.2791C54.9019 37.4599 53.7909 36.9998 52.6325 36.9998C51.4741 36.9998 50.3631 37.4599 49.544 38.2791L48 39.8231"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_378_87"
                  x="0"
                  y="0"
                  width="96"
                  height="96"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="10" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_378_87"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_378_87"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="getQoute">
          <button className="GTbutton">Get Free Quote</button>
        </div>
      </div>
    </div>
  );
}
