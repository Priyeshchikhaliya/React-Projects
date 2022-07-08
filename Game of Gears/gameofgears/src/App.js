import "./Mycss.css";
import React from "react";

import { items } from "./ItemList";
// id: number;
// name: string;
// slot: string;
// isWorn: boolean;
// damage: number;
// defense: number;

export default function App() {
  const [data, setData] = React.useState(items);
  const [checked, setChecked] = React.useState(false);

  function isWornToggle() {
    setData(
      data.map((item) =>
        item.isWorn ? { ...item, isWorn: false } : { ...item, isWorn: true }
      )
    );
    setChecked((preVal) => !preVal);
  }

  const temp = data.filter((preGear) => preGear.isWorn);

  const key = "slot";

  const final = [...new Map(temp.map((item) => [item[key], item])).values()];

  console.log(final);

  const gears = final.map((Cont) => {
    return (
      <div key={Cont.id} className="Gear">
        <h1 className="Title">{Cont.name.toUpperCase()}</h1>
<<<<<<< HEAD
		<h2 className="Defense">{Cont.defense}</h2>
        <h2 className="Damage">{Cont.damage}</h2>
        
=======
        <h2 className="Defense">{Cont.defense}</h2>
        <h2 className="Damage">{Cont.damage}</h2>
>>>>>>> 8cf4af2e9406407ec3f868d10c48abf269cfe664
      </div>
    );
  });

  let totalDamage = final.reduce(function (prev, current) {
    return prev + +current.damage;
  }, 0);

<<<<<<< HEAD
  let totalDefence = final.reduce(function (prev, current) {
=======
  let totalDefense = final.reduce(function (prev, current) {
>>>>>>> 8cf4af2e9406407ec3f868d10c48abf269cfe664
    return prev + +current.defense;
  }, 0);

  return (
    <div className="container">
      <h1 className="title">Player Stat Sheet</h1>
      <h1 className="stats-title">Stats</h1>
      <div className="flex-hor">
        <div className="damage-display">
          <h3>Defense: {totalDamage}</h3>
        </div>
<<<<<<< HEAD
        <div className="defence-display">
          <h3>Damage: {totalDefence}</h3>
=======
        <div className="defense-display">
          <h3>Damage: {totalDefense}</h3>
>>>>>>> 8cf4af2e9406407ec3f868d10c48abf269cfe664
        </div>
      </div>

      <div className="label-toggle">
        <h1 className="label-toggle-text">Toggle</h1>
        <input
          id="toggle"
          type="checkbox"
          name="toggle"
          onChange={isWornToggle}
          checked={checked}
        />
      </div>

      <h1 className="item-title">Items</h1>
      <div className="items-list">{gears}</div>
    </div>
  );
}
