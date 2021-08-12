import React, { useEffect, useState, useContext } from "react";
import { FavoriteContext } from "../component/favoriteList";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export function PeopleList() {
	const [color, setColor] = useState("green");
	const [people, setPeople] = useState([]);
	const favorites = useContext(FavoriteContext);

	useEffect(() => {
		fetch("https://www.swapi.tech/api/people")
			.then(res => {
				return res.json();
			})
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
								<h5 className="card-title">{person.name}</h5>
								<p className="card-text">{person.url}</p>
								<a href={"/people/" + person.uid} className="btn btn-primary">
									Profile
								</a>
								{favorites.favoriteArray.includes(person.name) ? (
									<button
										className="btn btn-outline-primary"
										onClick={() => {
											const newArray = favorites.favoriteArray;
											favorites.setFavoriteArray(newArray.filter(fav => fav !== person.name));
										}}>
										Delete
									</button>
								) : (
									<button
										className="btn btn-primary"
										onClick={() =>
											favorites.setFavoriteArray([...favorites.favoriteArray, person.name])
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
