import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { FavoriteContext } from "../component/favoriteList";
import "../../styles/home.scss";

export const Navbar = () => {
	const [showMenu, setShowMenu] = useState("");
	const favorites = useContext(FavoriteContext);

	return (
		<nav className=" navbar navbar-dark mb-3">
			<Link to="/">
				<span className="d-flex justify-content-start navbar-brand mb-0 h1">
					<img src="https://compass-ssl.xboxlive.com/assets/67/1c/671c739e-386a-4df3-9774-30e9e46eb53a.jpg?n=MSXC-StarWarsTitle-HeroAndImageCard-large-l-150x75-16x9-01.jpg" />
				</span>
			</Link>
			{/* BUTTONS TO PAGES */}

			<div className="ml-auto">
				<Link to="/people">
					<button className="btn navButton">Characters</button>
				</Link>
				<Link to="/planets">
					<button className="btn navButton">Planets</button>
				</Link>
				<Link to="/vehicle/">
					<button className="btn navButton">Spaceships</button>
				</Link>
			</div>
			<div className="d-flex justify-content-center dropdown">
				<button
					onClick={e => {
						if (showMenu == "") {
							setShowMenu("show");
						} else {
							setShowMenu("");
						}
					}}
					className="btn navButton dropdown-toggle"
					type="button"
					id="dropdownMenuButton1"
					dataBsToggle="dropdown"
					ariaExpanded="false">
					Favorites List
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
