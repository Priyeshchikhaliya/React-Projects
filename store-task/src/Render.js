import React from "react";
import "./index.css";

export default function Render(props) {
  return (
    <tr>
      <td className={props.stocked ? "item-stocked" : "item-outstocked"}>
        {props.name}
      </td>
      <td>{props.price}</td>
    </tr>
  );
}
