import React from "react";
import API from "../API";
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
import NoImage from "../images/no_image.jpg";
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumbnail from "./Thumbnail";
import LoadingSpinner from "./LoadingSpinner";
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
					<Thumbnail
						key={movie.id}
						clickable
						image={
							movie.poster_path
								? IMAGE_BASE_URL +
								  POSTER_SIZE +
								  movie.poster_path
								: NoImage
						}
						movieId={movie.id}
					/>
				))}
			</Grid>
			<LoadingSpinner />
		</React.Fragment>
	);
};

export default Home;
