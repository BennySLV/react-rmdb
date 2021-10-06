import React from "react";
import { useParams } from "react-router-dom";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import BreadCrumb from "./BreadCrumb";
import Grid from "./Grid";
import LoadingSpinner from "./LoadingSpinner";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
import NoImage from "../images/no_image.jpg";
import { useMovieFetch } from "../hooks/useMovieFetch";

const Movie = () => {
	const { movieId } = useParams();
	const { state: movie, loading, error } = useMovieFetch(movieId);
	if (loading) return <LoadingSpinner />;
	if (error) return <div>Something went wrong...</div>;
	return (
		<React.Fragment>
			<BreadCrumb movieTitle={movie.original_title} />
			<MovieInfo movie={movie} />
			<MovieInfoBar
				time={movie.runtime}
				budget={movie.budget}
				revenue={movie.revenue}
			/>
		</React.Fragment>
	);
};

export default Movie;
