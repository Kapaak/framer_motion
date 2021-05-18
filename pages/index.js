import SimpleBox from "../components/animations/simpleBox/SimpleBox";
import SimpleBoxDrag from "../components/animations/simpleBox/SimpleBoxDrag";
import SimpleBoxesF from "../components/animations/simpleBox/SimpleBoxesF";
import SimpleBoxes from "../components/animations/simpleBox/SimpleBoxes";
import SimpleBoxInfinite from "../components/animations/simpleBox/SimpleBoxInfinite";
import {
	ContainerMain,
	TypeContainer,
	WrapperMain,
} from "../styles/GlobalStyles";
import SimpleBoxTwoStates from "../components/animations/simpleBox/SimpleBoxTwoStates";
import SimpleHover from "../components/animations/buttons/SimpleHover";
import SimpleHoverCircle from "../components/animations/buttons/SimpleHoverCircle";
import SimpleHoverUnderline from "../components/animations/buttons/SimpleHoverUnderline";

export default function Home() {
	return (
		<WrapperMain>
			<ContainerMain>
				<h1>Animations book</h1>
				<TypeContainer>
					<SimpleBox />
					<SimpleBoxDrag />
					<SimpleBoxInfinite />
					<SimpleBoxes />
					{/* <SimpleBoxesF /> */}
					<SimpleBoxTwoStates />
				</TypeContainer>
				<TypeContainer>
					<SimpleHover />
					<SimpleHoverCircle />
					<SimpleHoverUnderline />
				</TypeContainer>
			</ContainerMain>
		</WrapperMain>
	);
}
