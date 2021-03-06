import React, { useEffect, useState, useContext } from "react";
import { FavoriteContext } from "../component/favoriteList";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export function VehicleList() {
	const [color, setColor] = useState("green");
	const [vehicle, setVehicle] = useState([]);
	const favorites = useContext(FavoriteContext);

	useEffect(() => {
		fetch("https://3000-aquamarine-mink-o3qq0p5g.ws-us15.gitpod.io/vehicle")
			.then(res => {
				return res.json();
			})
			.then(data => {
				setVehicle(data);
			});
	}, []);

	return (
		<div className="row">
			{vehicle ? (
				vehicle.map((vehicle, i) => {
					return (
						<div className="col" key={i}>
							<div className="card" style={{ width: "18rem" }}>
								<img
									src="https://via.placeholder.com/400x200.png?text=Stewart"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title">{vehicle.name}</h5>
									<a href={"/vehicle/" + vehicle.id} className="btn btn-primary">
										Profile
									</a>
									{favorites.favoriteArray.includes(vehicle.name) ? (
										<button
											className="btn btn-outline-primary"
											onClick={() => {
												const newArray = favorites.favoriteArray;
												favorites.setFavoriteArray(
													newArray.filter(fav => fav !== vehicle.name)
												);
											}}>
											Delete
										</button>
									) : (
										<button
											className="btn btn-primary"
											onClick={() =>
												favorites.setFavoriteArray([...favorites.favoriteArray, vehicle.name])
											}>
											Like
										</button>
									)}
								</div>
							</div>
						</div>
					);
				})
			) : (
				<h1>LOADING...</h1>
			)}
		</div>
	);
}
