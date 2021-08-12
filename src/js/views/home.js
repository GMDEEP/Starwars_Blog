import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { PeopleList } from "./peopleList";
import { PlanetsList } from "./planetsList";
import { VehicleList } from "./vehicleList";

export const Home = () => (
	<div dataBsSpy="scroll" className="text-center mt-5">
		<h1>Galaxy Characters</h1>
		<div className="col-12 mt-5 mb-5">
			<PeopleList />
		</div>
		<h1>Somewhere far far away</h1>
		<div className="col-12 mt-5 mb-5">
			<PlanetsList />
		</div>
		<h1>Spacecraft</h1>
		<div className="col-12 mt-5 mb-5">
			<VehicleList />
		</div>
	</div>
);
