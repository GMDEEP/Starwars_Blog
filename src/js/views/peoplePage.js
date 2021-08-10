import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function PeoplePage() {
	const [color, setColor] = React.useState("green");
	const [person, setPerson] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		fetch("https://www.swapi.tech/api/people/" + id)
			.then(res => {
				return res.json();
			})
			.then(data => {
				setPerson(data.result);
			});
	}, []);

	return (
		<div className="row">
			<div className="col-sm-6">
				<div className="card">
					<div className="card-body">
						<img
							src="https://th.bing.com/th/id/R.68df54532e6c0e96c97ed5c50a2d8647?rik=DO5an3wtY8d1HA&riu=http%3a%2f%2fdiskingdom.com%2fwp-content%2fuploads%2f2015%2f12%2fIMG_3950.jpg&ehk=ATdu0YhsVvZL8VFGXEiibMdUB8YhTlwkvBUXFpEIDYU%3d&risl=&pid=ImgRaw&r=0"
							className="card-img-top"
							alt="..."
						/>
					</div>
				</div>
			</div>
			<div className="col-sm-6">
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">{person.properties ? person.properties.name : "...name"}</h5>
						<p className="card-text">{person.description}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
