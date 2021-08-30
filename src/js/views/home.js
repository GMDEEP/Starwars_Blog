import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { PeopleList } from "./peopleList";
import { PlanetsList } from "./planetsList";
import { VehicleList } from "./vehicleList";

export const Home = () => (
	<div className="container-fluid horizontal-scrollable">
		<h1 className="text-center mt-5">Galaxy Characters</h1>
		<div className="row flex-row flex-nowrap">
			<div className="col-12 mt-5">
				<PeopleList />
			</div>
		</div>
		<h1 className="text-center mt-5 light">Galaxy Planets</h1>
		<div className="row flex-row flex-nowrap">
			<div className="col-12 mt-5 ">
				<PlanetsList />
			</div>
		</div>
		<h1 className="text-center mt-5">Galaxy Spacecraft</h1>
		<div className="row flex-row flex-nowrap">
			<div className="col-12 mt-5 ">
				<VehicleList />
			</div>
		</div>
	</div>
);
