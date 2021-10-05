import React from "react";
import { Link } from "react-router-dom";
import NotFoundImage from "../images/not_found.png";

const NotFound = () => (
	<div>
		<img src={NotFoundImage} alt="Not found" /> <br />
		<Link to="/">Go back</Link>
	</div>
);

export default NotFound;
