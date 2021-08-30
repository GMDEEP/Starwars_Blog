import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function VehiclePage() {
	const [color, setColor] = React.useState("green");
	const [vehicle, setVehicle] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		fetch("https://3000-aquamarine-mink-o3qq0p5g.ws-us16.gitpod.io/vehicle/" + id)
			.then(res => {
				return res.json();
			})
			.then(data => {
				setVehicle(data);
			});
	}, []);

	return (
		<div className="row">
			<div className="col-sm-6">
				<div className="card">
					<div className="card-body">
						<img src="#" className="card-img-top" alt="..." />
					</div>
				</div>
			</div>
			<div className="col-sm-6">
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">{vehicle ? vehicle.name : "...name"}</h5>
						<p className="card-text">{vehicle.model}</p>
						<p className="card-text">{vehicle.vehicle_class}</p>
						<p className="card-text">{vehicle.manufacturer}</p>
						<p className="card-text">{vehicle.length}</p>
						<p className="card-text">{vehicle.cost_in_credits}</p>
						<p className="card-text">{vehicle.crew}</p>
						<p className="card-text">{vehicle.passengers}</p>
						<p className="card-text">{vehicle.max_atmosphering_speed}</p>
						<p className="card-text">{vehicle.cargo_capacity}</p>
						<p className="card-text">{vehicle.consumables}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
