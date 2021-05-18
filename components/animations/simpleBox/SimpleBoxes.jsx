import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { FlexContainer, TextContainer } from "../../../styles/GlobalStyles";

const SimpleBoxes = () => {
	const [isClicked, setIsClicked] = useState(false);
	const list = {
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				staggerChildren: 0.2,
				duration: 1.5,
				when: "afterChildren",
			},
		},
		hidden: {
			opacity: 0.1,
			y: 60,
			transition: {
				staggerChildren: 0.5,
				duration: 1.5,
			},
		},
	};
	const item = {
		visible: { opacity: 1, x: [null, 80, 0] },
		hidden: { opacity: 0, x: -100 },
	};

	return (
		<FlexContainer>
			<TextContainer>
				<h2>Box with children transition</h2>
			</TextContainer>
			<StyledSimpleBoxes
				initial="hidden"
				variants={list}
				animate={isClicked ? "visible" : "hidden"}
				onClick={() => setIsClicked(!isClicked)}

				// transition={{
				// 	staggerChildren: 0.2,
				// 	duration: 1.5,
				// 	when: "afterChildren",
				// }}
			>
				<StyledChildren
					variants={item}
					// transition={{ times: [null, 0.9, 0.5] }}
				/>
				<StyledChildren variants={item} />
				<StyledChildren variants={item} />
			</StyledSimpleBoxes>
		</FlexContainer>
	);
};

export default SimpleBoxes;

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
