import React from "react";

export function PeoplePage() {
	const [color, setColor] = React.useState("green");

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
						<a href="#" className="btn btn-primary">
							Go somewhere
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
