import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

export const Navbar = () => {
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
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
  </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
        </nav>
    );
};
