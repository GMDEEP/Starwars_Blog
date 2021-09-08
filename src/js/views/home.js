import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Home = () => (
	<Carousel fade>
		<Carousel.Item>
			<img
				className="d-block carouselImg"
				src="https://res.cloudinary.com/djwr65ikt/image/upload/v1630434385/368503_oz3s3i.jpg"
				alt="First slide"
			/>
			<Link to="/people">
				<Carousel.Caption>
					<h5>CHARACTERS OF THE GALAXY</h5>
					<p>SOMEWHERE FAR, FAR AWAY TO THE COMFORT OF EARTH</p>
				</Carousel.Caption>
			</Link>
		</Carousel.Item>
		<Carousel.Item>
			<img
				className="d-block carouselImg"
				src="https://res.cloudinary.com/djwr65ikt/image/upload/v1630434753/star-wars-star-wars-the-fallen-order-planet-digital-art-artwork-hd-wallpaper-preview_poejdb.jpg"
				alt="Second slide"
			/>
			<Link to="/planets">
				<Carousel.Caption>
					<h5>PLANETS FAR, FAR AWAY</h5>
					<p>THERE MAY BE MORE EARTH-LIKE PLANETS THAN GRAINS OF SAND ON ALL OUR BEACHES</p>
				</Carousel.Caption>
			</Link>
		</Carousel.Item>
		<Carousel.Item>
			<img
				className="d-block carouselImg"
				src="https://res.cloudinary.com/djwr65ikt/image/upload/v1630434944/ea1097a6ee800831b32c0e94ab9e6818_hywrnq.jpg"
				alt="Third slide"
			/>
			<Link to="/vehicle">
				<Carousel.Caption>
					<h5>SPACECRAFT FROM ANOTHER DIMENSION</h5>
					<p>TRAVELING AT LIGHTSPEED OR WARPING SPACE AND TIME WHO REALLY KNOWS</p>
				</Carousel.Caption>
			</Link>
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
