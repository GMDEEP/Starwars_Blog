import React, { useEffect, useState, useContext } from "react";
import { FavoriteContext } from "../component/favoriteList";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export function PlanetsList() {
	const [color, setColor] = useState("green");
	const [planets, setPlanets] = useState([]);
	const favorites = useContext(FavoriteContext);

	useEffect(() => {
		fetch("https://www.swapi.tech/api/planets")
			.then(res => {
				return res.json();
			})
			.then(data => {
				setPlanets(data.results);
			});
	}, []);

	return (
		<div className="row">
			{planets.map((planets, i) => {
				return (
					<div className="col" key={i}>
						<div className="card" style={{ width: "18rem" }}>
							<img
								src="https://via.placeholder.com/400x200.png?text=Stewart"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">{planets.name}</h5>
								<p className="card-text">{planets.url}</p>
								<a href={"/planets/" + planets.uid} className="btn btn-primary">
									Profile
								</a>
								{favorites.favoriteArray.includes(planets.name) ? (
									<button
										className="btn btn-outline-primary"
										onClick={() => {
											const newArray = favorites.favoriteArray;
											favorites.setFavoriteArray(newArray.filter(fav => fav !== planets.name));
										}}>
										Delete
									</button>
								) : (
									<button
										className="btn btn-primary"
										onClick={() =>
											favorites.setFavoriteArray([...favorites.favoriteArray, planets.name])
										}>
										Like
									</button>
								)}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
