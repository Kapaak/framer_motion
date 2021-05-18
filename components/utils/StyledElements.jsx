import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledButton = styled(motion.button)`
	position: relative;
	padding: 1.5rem 1rem;
	border-radius: 0.5rem;
	border: none;
	background-color: ${({ colorType }) =>
		colorType === 1
			? "var(--first-col)"
			: colorType === 2
			? "var(--second-col)"
			: "var(--third-col)"};
	color: ${({ colorType }) => (colorType === 2 ? "white" : "black")};
	cursor: pointer;
`;
