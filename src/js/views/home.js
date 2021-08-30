import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { PeopleList } from "./peopleList";
import { PlanetsList } from "./planetsList";
import { VehicleList } from "./vehicleList";

export const Home = () => (
	<div id="carouselExampleDark" className="carousel carousel-dark slide" dataBsRide="carousel">
		<div className="carousel-indicators">
			<button
				type="button"
				dataBsTarget="#carouselExampleDark"
				dataBsSlideTo="0"
				className="active"
				ariaCurrent="true"
				ariaLabel="Slide 1"
			/>
			<button type="button" dataBsTarget="#carouselExampleDark" dataBsSlideTo="1" ariaLabel="Slide 2" />
			<button type="button" dataBsTarget="#carouselExampleDark" dataBsSlideTo="2" ariaLabel="Slide 3" />
		</div>
		<div className="carousel-inner">
			<div className="carousel-item active" dataBsInterval="10000">
				<img
					src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpaperaccess.com%2Fstar-wars-characters&psig=AOvVaw0091pC-UvGJUhPiagXIqMQ&ust=1630440020677000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKj_ocfE2fICFQAAAAAdAAAAABAD"
					className="d-block w-100"
					alt="..."
				/>
				<div className="carousel-caption d-none d-md-block">
					<h5>CHARACTERS OF THE GALAXY</h5>
					<p>SOMEWHERE FAR, FAR AWAY TO THE COMFORT OF EARTH</p>
					<PeopleList />
				</div>
			</div>
			<div className="carousel-item" dataBsInterval="2000">
				<img
					src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.wallpapersafari.com%2F91%2F48%2FYxkc6s.jpg&imgrefurl=https%3A%2F%2Fwallpapersafari.com%2Fw%2FYxkc6s&tbnid=96tT51r_uclGeM&vet=12ahUKEwiD5sOPytnyAhWVjuAKHRLZDDUQMygQegUIARDEAQ..i&docid=ZqpR1JiabM_CKM&w=1920&h=1080&q=star%20wars%20planets%20wallpaper%204k&ved=2ahUKEwiD5sOPytnyAhWVjuAKHRLZDDUQMygQegUIARDEAQ"
					className="d-block w-100"
					alt="..."
				/>
				<div className="carousel-caption d-none d-md-block">
					<h5>PLANETS FAR, FAR AWAY</h5>
					<p>THERE MAY BE MORE EARTH-LIKE PLANETS THAN GRAINS OF SAND ON ALL OUR BEACHES</p>
					<PlanetsList />
				</div>
			</div>
			<div className="carousel-item">
				<img
					src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapersden.com%2Fstar-wars-spaceship-8k-wallpaper%2F1242x2688%2F&psig=AOvVaw0yA2g2NGNlW6GStK3kwl7D&ust=1630441663248000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOjPudXK2fICFQAAAAAdAAAAABAD"
					className="d-block w-100"
					alt="..."
				/>
				<div className="carousel-caption d-none d-md-block">
					<h5>Third slide label</h5>
					<p>Some representative placeholder content for the third slide.</p>
					<VehicleList />
				</div>
			</div>
		</div>
		<button className="carousel-control-prev" type="button" dataBsTarget="#carouselExampleDark" dataBsSlide="prev">
			<span className="carousel-control-prev-icon" ariaHidden="true" />
			<span className="visually-hidden">Previous</span>
		</button>
		<button className="carousel-control-next" type="button" dataBsTarget="#carouselExampleDark" dataBsSlide="next">
			<span className="carousel-control-next-icon" ariaHidden="true" />
			<span className="visually-hidden">Next</span>
		</button>
	</div>
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
