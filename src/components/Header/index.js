import React from "react";
import { Link } from "react-router-dom";

import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

import { Wrapper, Content, LogoImage, TMDBLogoImage } from "./Header.styles";

const Header = () => (
	<Wrapper>
		<Content>
			<Link to="/">
				<LogoImage src={RMDBLogo} alt="rmdb-logo" />
			</Link>
			<TMDBLogoImage src={TMDBLogo} alt="tmdb-logo" />
		</Content>
	</Wrapper>
);

export default Header;
