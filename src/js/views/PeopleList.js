import React from "react";

export function PeopleList() {
	const [color, setColor] = React.useState("green");
	let abc = [{ name: "value1" }, { name: "value2" }, { name: "value3" }];
	return abc.map((person, i) => {
		return (
			<div key={i} className="card" style={{ width: "18rem" }}>
				<img src="https://via.placeholder.com/400x200.png?text=Stewart" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{person.name}</h5>
					<p className="card-text">
						Some quick example text to build on the card title and make up the bulk of the card&apos;s
						content.
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		);
	});
}
