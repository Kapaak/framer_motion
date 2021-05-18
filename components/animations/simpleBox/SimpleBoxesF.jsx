import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { FlexContainer, TextContainer } from "../../../styles/GlobalStyles";

const SimpleBoxesF = () => {
	const [isClicked, setIsClicked] = useState(false);
	const variants = {
		visible: i => ({
			opacity: 1,
			transition: {
				delay: i * 0.3,
			},
		}),
		hidden: { opacity: 0.2 },
	};

	const items = [0, 1, 2];

	return (
		<FlexContainer>
			<TextContainer>
				<h2>Box with children func transition</h2>
			</TextContainer>
			<StyledSimpleBoxes
				initial="hidden"
				variants={variants}
				animate={isClicked ? "visible" : "hidden"}
				onClick={() => setIsClicked(!isClicked)}
			>
				{items.map((item, i) => (
					<StyledChildren custom={i} animate="visible" variants />
				))}
			</StyledSimpleBoxes>
		</FlexContainer>
	);
};

export default SimpleBoxesF;

const StyledSimpleBoxes = styled(motion.div)`
	width: 10rem;
	height: 10rem;
	background-color: #81b29a;
	border-radius: 1rem;
`;

const StyledChildren = styled(motion.div)`
	width: 5rem;
	height: 5rem;
	background-color: #3d405b;
	margin: 2rem;
	border-radius: 0.5rem;
`;
