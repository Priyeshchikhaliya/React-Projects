import React from "react";
import "./index.css";

export default function Header({ index }) {
  if (index == 0) {
    return (
      <>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </>
    );
  }
}
