import React from "react";
import Carousel from "react-bootstrap/Carousel";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { PeopleList } from "./peopleList";
import { PlanetsList } from "./planetsList";
import { VehicleList } from "./vehicleList";

export const Home = () => (
	<Carousel fade>
		<Carousel.Item>
			<img
				className="d-block w-100"
				src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpaperaccess.com%2Fstar-wars-characters&psig=AOvVaw0091pC-UvGJUhPiagXIqMQ&ust=1630440020677000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKj_ocfE2fICFQAAAAAdAAAAABAD"
				alt="First slide"
			/>
			<Carousel.Caption>
				<h5>CHARACTERS OF THE GALAXY</h5>
				<p>SOMEWHERE FAR, FAR AWAY TO THE COMFORT OF EARTH</p>
				<PeopleList />
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item>
			<img
				className="d-block w-100"
				src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.wallpapersafari.com%2F91%2F48%2FYxkc6s.jpg&imgrefurl=https%3A%2F%2Fwallpapersafari.com%2Fw%2FYxkc6s&tbnid=96tT51r_uclGeM&vet=12ahUKEwiD5sOPytnyAhWVjuAKHRLZDDUQMygQegUIARDEAQ..i&docid=ZqpR1JiabM_CKM&w=1920&h=1080&q=star%20wars%20planets%20wallpaper%204k&ved=2ahUKEwiD5sOPytnyAhWVjuAKHRLZDDUQMygQegUIARDEAQ"
				alt="Second slide"
			/>

			<Carousel.Caption>
				<h5>PLANETS FAR, FAR AWAY</h5>
				<p>THERE MAY BE MORE EARTH-LIKE PLANETS THAN GRAINS OF SAND ON ALL OUR BEACHES</p>
				<PlanetsList />
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item>
			<img
				className="d-block w-100"
				src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapersden.com%2Fstar-wars-spaceship-8k-wallpaper%2F1242x2688%2F&psig=AOvVaw0yA2g2NGNlW6GStK3kwl7D&ust=1630441663248000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOjPudXK2fICFQAAAAAdAAAAABAD"
				alt="Third slide"
			/>

			<Carousel.Caption>
				<h3>SPACECRAFT FROM ANOTHER DIMENSION</h3>
				<p>TRAVELING AT LIGHTSPEED OR WARPING SPACE AND TIME WHO REALLY KNOWS</p>
				<VehicleList />
			</Carousel.Caption>
		</Carousel.Item>
	</Carousel>
);

{
	/* <div className="container-fluid horizontal-scrollable">
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
	</div>  */
}
