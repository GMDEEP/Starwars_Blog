import React, { useEffect, useState } from "react";

export function PeopleList() {
	const [color, setColor] = useState("green");
	// let abc = [{ name: "value1" }, { name: "value2" }, { name: "value3" }];
	const [people, setPeople] = useState([]);

	useEffect(() => {
		fetch("https://www.swapi.tech/api/people")
			.then(res => res.json())
			.then(data => {
				setPeople(data.results);
			});
	}, []);

	return (
		<div className="row">
			{people.map((person, i) => {
				return (
					<div className="col" key={i}>
						<div className="card" style={{ width: "18rem" }}>
							<img
								src="https://via.placeholder.com/400x200.png?text=Stewart"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">Name</h5>
								<p className="card-text">
									Some quick example text to build on the card title and make up the bulk of the
									card&apos;s content.
								</p>
								<a href="#" className="btn btn-primary">
									Go somewhere
								</a>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
