import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FlexContainer, TextContainer } from "../../../styles/GlobalStyles";

const simpleBoxDrag = {
	open: { x: 174 },
	closed: { x: 0 },
};

const SimpleBoxDrag = () => {
	const [isClicked, setIsClicked] = useState(false);
	const containerRef = useRef(null);
	useEffect(() => {
		console.log(containerRef.current.offsetWidth);
		console.log(containerRef.current.getBoundingClientRect().left);
	}, [containerRef.current]);

	return (
		<FlexContainer ref={containerRef}>
			<TextContainer>
				<h2>Box with X transition on drag</h2>
			</TextContainer>
			<StyledBoxDrag
				initial={false}
				variants={simpleBoxDrag}
				onDragEnd={() => setIsClicked(!isClicked)}
				animate={isClicked ? "open" : "closed"}
				transition={{ duration: isClicked ? 1.5 : 0.5 }}
				drag="x"
				dragConstraints={{ left: 0, right: 300 }}
			/>
		</FlexContainer>
	);
};

export default SimpleBoxDrag;

const StyledBoxDrag = styled(motion.div)`
	width: 10rem;
	height: 10rem;
	background-color: #3d405b;
	border-radius: 1rem;
`;
