import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FlexContainer, TextContainer } from "../../../styles/GlobalStyles";
import { StyledButton } from "../../utils/StyledElements";

const variants = {
	active: {
		scale: 1.2,
		transition: {
			when: "afterChildren",
		},
	},

	inactive: {},
};
const variants2 = {
	active: {
		scale: 5,
		opacity: 1,
		transition: {
			duration: 1,
		},
	},
	inactive: {
		scale: 1,
		opacity: 0,
	},
};
const SimpleHoverCircle = () => {
	const [btnCoordinates, setBtnCoordinates] = useState({ x: 0, y: 0 });
	const [isTriggered, setIsTriggered] = useState(false);

	const getCoordinates = e => {
		if (!isTriggered) {
			setBtnCoordinates({
				x: e.nativeEvent.offsetX,
				y: e.nativeEvent.offsetY,
			});
			setIsTriggered(true);
		}
	};

	const handleMouseOut = () => {
		setIsTriggered(false);
	};

	return (
		<FlexContainer>
			<TextContainer>
				<h2>Button with hover effect</h2>
			</TextContainer>
			<StyledButton2
				colorType={3}
				variants={variants}
				initial="inactive"
				whileHover="active"
				// onMouseEnter={getCoordinates}
				// onMouseMove={getCoordinates}
				onMouseMove={getCoordinates}
				onMouseLeave={handleMouseOut}
			>
				<p>Hover over me</p>
				<StyledCircle variants={variants2} btnCoordinates={btnCoordinates} />
			</StyledButton2>
		</FlexContainer>
	);
};

export default SimpleHoverCircle;

const StyledButton2 = styled(StyledButton)`
	overflow: hidden;
	p {
		position: relative;
		z-index: 2;
	}
`;
const StyledCircle = styled(motion.div)`
	height: 4rem;
	width: 4rem;
	background-color: var(--first-col);
	position: absolute;
	bottom: 50%;
	left: ${({ btnCoordinates }) => btnCoordinates.x}px;
	top: ${({ btnCoordinates }) => btnCoordinates.x}px;
	border-radius: 50%;
`;
