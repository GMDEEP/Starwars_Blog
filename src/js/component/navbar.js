import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

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
			<div className="dropdown">
				{/* openDropDown=() => {
                    let value = "dropdown open";
                    if(this.state.openDropDown === "dropdown open"){
                        value = "dropdown";
                    }
                } */}
				<button
					className="btn btn-primary dropdown-toggle"
					type="button"
					id="dropdownMenuButton1"
					dataBsToggle="dropdown"
					ariaExpanded="false">
					Dropdown button
				</button>
				<ul className="dropdown-menu" ariaLabelledBy="dropdownMenuButton1">
					<li>
						<a className="dropdown-item" href="#">
							Action
						</a>
					</li>
					<li>
						<a className="dropdown-item" href="#">
							Another action
						</a>
					</li>
					<li>
						<a className="dropdown-item" href="#">
							Something else here
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
