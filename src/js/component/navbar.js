import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img src="https://th.bing.com/th/id/OIP.x5pcPIJR6arF1M6EFTGMLgHaFj?pid=ImgDet&rs=1" />
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/people">
					<button className="btn btn-primary">Galaxy&apos;s Characters</button>
				</Link>
				<Link to="/people/:id">
					<button className="btn btn-primary">Character Profile</button>
				</Link>
				<Link to="/planets">
					<button className="btn btn-primary">Planets</button>
				</Link>
				<Link to="/planets/:id">
					<button className="btn btn-primary">Planet Details</button>
				</Link>
			</div>
		</nav>
	);
};
