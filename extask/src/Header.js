import React from "react";
import "./index.css";

export default function Header({index}) {
  return (
    <table>
      {index===0 && <thead>
        <th>Name</th>
        <th>Price</th>
      </thead>}
    </table>
  );
}
