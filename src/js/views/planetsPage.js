import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function PlanetsPage() {
	const [color, setColor] = React.useState("green");
	const [planets, setPlanets] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		fetch("https://3000-aquamarine-mink-o3qq0p5g.ws-us16.gitpod.io/planet/" + id)
			.then(res => {
				return res.json();
			})
			.then(data => {
				setPlanets(data);
			});
	}, []);

	return (
		<div className="row">
			<div className="col-sm-6">
				<div className="card">
					<div className="card-body">
						<img
							src="https://via.placeholder.com/800x600.png?text=Stewart"
							className="card-img-top"
							alt="..."
						/>
					</div>
				</div>
			</div>
			<div className="col-sm-6">
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">{planets ? planets.name : "...name"}</h5>
						<p className="card-text">{planets.diameter}</p>
						<p className="card-text">{planets.rotation_period}</p>
						<p className="card-text">{planets.orbital_period}</p>
						<p className="card-text">{planets.gravity}</p>
						<p className="card-text">{planets.population}</p>
						<p className="card-text">{planets.climate}</p>
						<p className="card-text">{planets.terrain}</p>
						<p className="card-text">{planets.surface_water}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
