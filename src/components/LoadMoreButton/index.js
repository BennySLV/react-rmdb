import React from "react";

import { Wrapper } from "./LoadMoreButton.styles";

const LoadMoreButton = ({ text, callback }) => (
	<Wrapper type="button" onClick={callback}>
		{text}
	</Wrapper>
);

export default LoadMoreButton;
