import styled from "styled-components";
import { motion } from "framer-motion";
//components
import { FlexContainer, TextContainer } from "../../../styles/GlobalStyles";
import { StyledButton } from "../../utils/StyledElements";
const SimpleHoverUnderline = () => {
	const buttonVariant = {
		visible: {
			// opacity: 0.8,
			// x: 5,
		},
		hidden: {
			// opacity: 0.1,
		},
	};
	const underlineVariant = {
		visible: {
			// backgroundColor: "green",
			x: [null, 100, -100, 0],
			y: [null, 0, -11.5, -11.5],
			opacity: [null, 0, 0, 1],
		},
		// hidden: { backgroundColor: "blue" },
	};

	const spanVariant = {
		visible: {
			x: [null, 0, 0, 5],
		},
	};

	return (
		<FlexContainer>
			<TextContainer>
				<h2>Box withs X transition on click</h2>
			</TextContainer>
			<StyledButton
				colorType={2}
				initial="hidden"
				whileHover="visible"
				variants={buttonVariant}
				style={{ background: "none", color: "black", fontSize: "2rem" }}
			>
				<motion.p variants={spanVariant}>Hover over me</motion.p>
				<StyledUnderline variants={underlineVariant} />
			</StyledButton>
		</FlexContainer>
	);
};

const StyledUnderline = styled(motion.p)`
	position: absolute;
	width: calc(100% - 2rem);
	height: 0.3rem;
	background-color: var(--first-col);
`;

export default SimpleHoverUnderline;
