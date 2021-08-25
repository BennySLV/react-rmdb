import React, { useState, useEffect } from "react";
import API from "../API";
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
import NoImage from "../images/no_image.jpg";
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import { useHomeFetch } from "../hooks/useHomeFetch";

const Home = () => {
	const { state, loading, error } = useHomeFetch();
	return (
		<React.Fragment>
			{state.results[0] ? (
				<HeroImage
					image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
					title={state.results[0].original_title}
					text={state.results[0].overview}
				/>
			) : null}
			<Grid header="Popular Movies">
				{state.results.map((movie) => (
					<div key={movie.id}>{movie.title}</div>
				))}
			</Grid>
		</React.Fragment>
	);
};

export default Home;
