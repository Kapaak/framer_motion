import React from "react";
//components
import { FlexContainer, TextContainer } from "../../../styles/GlobalStyles";
import { StyledButton } from "../../utils/StyledElements";

const variants = {
	active: {
		scale: 1.2,
		opacity: 1,
	},

	inactive: {
		opacity: 0.5,
	},
};
const SimpleHover = () => {
	return (
		<FlexContainer>
			<TextContainer>
				<h2>Button with hover effect</h2>
			</TextContainer>
			<StyledButton
				colorType={3}
				variants={variants}
				initial="inactive"
				whileHover="active"
			>
				Hover over me
			</StyledButton>
		</FlexContainer>
	);
};

export default SimpleHover;
