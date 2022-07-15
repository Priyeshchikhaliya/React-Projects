import React from "react";
import "./index.css";

export default function Card(props) {
  const FinalData = props.data
    .filter((Cont) => {
      return props.checked ? Cont.stocked : Cont;
    })
    .map((item, index) => {
      return (
        <table className="table">
          <tbody>
            <tr>
              <td className={item.stocked ? "item-stocked" : "item-outstocked"}>
                {item.name}
              </td>
              <td>{item.price}</td>
            </tr>
          </tbody>
        </table>
      );
    });
  return FinalData;
}
