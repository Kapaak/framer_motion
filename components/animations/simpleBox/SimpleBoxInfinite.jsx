import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { FlexContainer, TextContainer } from "../../../styles/GlobalStyles";

const simpleBoxInfinite = {
	open: { rotate: [null, 270, 270, 90], scale: [1, 0.8, 0.8, 0.7, 1] },
	// open: { rotate: 180 },
	closed: { rotate: 0 },
};

const SimpleBoxInfinite = () => {
	const [isClicked, setIsClicked] = useState(false);

	return (
		<FlexContainer>
			<TextContainer>
				<h2>Box with infinite transition</h2>
			</TextContainer>
			<StyledBoxInfinite
				onClick={() => setIsClicked(!isClicked)}
				initial={false}
				variants={simpleBoxInfinite}
				animate={isClicked ? "open" : "closed"}
				transition={{
					duration: isClicked ? 2 : 0.5,
					repeat: isClicked ? Infinity : 0,
				}}
				drag
			/>
		</FlexContainer>
	);
};

export default SimpleBoxInfinite;

const StyledBoxInfinite = styled(motion.div)`
	width: 10rem;
	height: 10rem;
	background-color: #81b29a;
	border-radius: 1rem;
`;
