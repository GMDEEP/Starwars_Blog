import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { FavoriteContext } from "../component/favoriteList";
import "../../styles/home.scss";

export const Navbar = () => {
	const [showMenu, setShowMenu] = useState("");
	const favorites = useContext(FavoriteContext);

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
				<button
					onClick={e => {
						if (showMenu == "") {
							setShowMenu("show");
						} else {
							setShowMenu("");
						}
					}}
					className="btn btn-primary dropdown-toggle"
					type="button"
					id="dropdownMenuButton1"
					dataBsToggle="dropdown"
					ariaExpanded="false">
					Dropdown button
				</button>
				<ul className={"dropdown-menu" + showMenu} ariaLabelledBy="dropdownMenuButton1">
					{favorites.favoriteArray.map((fav, index) => {
						return (
							<li key={index}>
								<a className="dropdown-item" href="#">
									{fav}
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};
