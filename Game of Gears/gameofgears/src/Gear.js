import "./Mycss.css";
import React from "react";

function Gear(props) {
	return (
		<div className="Gear">
			<h1 className="Title">{props.Cont.name.toUpperCase()}</h1>
			<h2 className="Damage">{props.Cont.damage}</h2>
			<h2 className="Defense">{props.Cont.defense}</h2>
		</div>
	);
}

export default Gear;
