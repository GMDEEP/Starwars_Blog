import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function PeoplePage() {
	const [color, setColor] = React.useState("green");
	const [person, setPerson] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		fetch("https://3000-aquamarine-mink-o3qq0p5g.ws-us16.gitpod.io/people/" + id)
			.then(res => {
				return res.json();
			})
			.then(data => {
				setPerson(data);
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
						<h5 className="card-title">{person ? person.name : "...name"}</h5>
						<p className="card-text">{person.birth_year}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
