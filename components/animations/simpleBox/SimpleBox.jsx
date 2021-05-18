import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { FlexContainer, TextContainer } from "../../../styles/GlobalStyles";

const simpleBox = {
	open: { x: 300 },
	closed: { x: 0 },
};

const SimpleBox = () => {
	const [isClicked, setIsClicked] = useState(false);

	return (
		<FlexContainer>
			<TextContainer>
				<h2>Box with X transition on click</h2>
			</TextContainer>
			<StyledBox
				initial={false}
				variants={simpleBox}
				onClick={() => setIsClicked(!isClicked)}
				animate={isClicked ? "open" : "closed"}
				transition={{ duration: isClicked ? 1.5 : 0.5 }}
			/>
			{/* <StyledBox
				initial={false}
				animate={{ x: isClicked ? 300 : 0 }}
				transition={{ duration: isClicked ? 1.5 : 0.5 }}
				onClick={() => setIsClicked(!isClicked)}
			/> */}
		</FlexContainer>
	);
};

export default SimpleBox;

const StyledBox = styled(motion.div)`
	width: 10rem;
	height: 10rem;
	background-color: #e07a5f;
	border-radius: 1rem;
`;
