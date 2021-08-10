import React, { useEffect, useState } from "react";

export function PlanetsPage() {
	const [color, setColor] = React.useState("green");
	const [people, setPeople] = useState([]);

	useEffect(() => {
		fetch("https://www.swapi.tech/api//planets/:id")
			.then(res => {
				return res.json();
			})
			.then(data => {
				setPeople(data.results);
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
						<h5 className="card-title">Special title treatment</h5>
						<p className="card-text">
							With supporting text below as a natural lead-in to additional content.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
