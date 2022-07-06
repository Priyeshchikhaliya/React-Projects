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
			data.map(item =>
				item.isWorn ? { ...item, isWorn: false } : { ...item, isWorn: true }
			)
		);
		setChecked(preVal => !preVal);
	}

	const temp = data.filter(preGear => preGear.isWorn);

	for (let i = 0; i < data.length; i++) {
		data.find(val => {
			console.log(val.slot);
		});
	}
	// let mySet = new Set([])
	// data.forEach(item => mySet.add(item.slot))
	// console.log(mySet);
	// for (let i = 0; i < temp.length; i++) {
	// 	let x = temp[i].slot;
	// 	for (let j = i+1; j < temp.length; j++) {
	// 		if (temp[j].slot == x && final.includes(x)) {
	// 			break;
	// 		}

	// 		final.push(temp[j]);
	// 	}
	// }

	const gears = temp.map(Cont => {
		return (
			<div key={Cont.id} className="Gear">
				<h1 className="Title">{Cont.name.toUpperCase()}</h1>
				<h2 className="Damage">{Cont.damage}</h2>
				<h2 className="Defense">{Cont.defense}</h2>
			</div>
		);
	});

	let totalDamage = temp.reduce(function (prev, current) {
		return prev + +current.damage;
	}, 0);

	let totalDefence = temp.reduce(function (prev, current) {
		return prev + +current.defense;
	}, 0);

	return (
		<div className="container">
			<h1 className="title">Player Stat Sheet</h1>
			<h1 className="stats-title">Stats</h1>
			<div className="flex-hor">
				<div>
					<h3>Defense: {totalDamage}</h3>
				</div>
				<div>
					<h3>Damage: {totalDefence}</h3>
				</div>
			</div>

			<label className="label-toggle">Toggle</label>
			<input
				id="toggle"
				type="checkbox"
				name="toggle"
				onChange={isWornToggle}
				checked={checked}
			/>

			<h1 className="item-title">Items</h1>
			<div className="items-list">{gears}</div>
		</div>
	);
}
