import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function PlanetsPage() {
	const [color, setColor] = React.useState("green");
	const [planets, setPlanets] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		fetch("https://www.swapi.tech/api//planets/" + id)
			.then(res => {
				return res.json();
			})
			.then(data => {
				setPlanets(data.results);
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
						<h5 className="card-title">Name</h5>
						<p className="card-text">Hello</p>
					</div>
				</div>
			</div>
		</div>
	);
}
