import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FlexContainer, TextContainer } from "../../../styles/GlobalStyles";

const SimpleBoxTwoStates = () => {
	const [isClicked, setIsClicked] = useState(false);

	return (
		<FlexContainer>
			<TextContainer>
				<h2>Box with two states</h2>
			</TextContainer>
			<StyledFlex isActive={isClicked} onClick={() => setIsClicked(!isClicked)}>
				<StyledSimpleBoxTwoStates layout />
			</StyledFlex>
		</FlexContainer>
	);
};

export default SimpleBoxTwoStates;
const StyledFlex = styled.div`
	display: flex;
	justify-content: ${({ isActive }) => (isActive ? "flex-end" : "flex-start")};
	width: 15rem;
`;
const StyledSimpleBoxTwoStates = styled(motion.div)`
	width: 10rem;
	height: 10rem;
	background-color: #e07a5f;
	border-radius: 1rem;
`;
