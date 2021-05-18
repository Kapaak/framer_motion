//libraries
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,*::before,*::after{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

	:root{
		--first-col:#E07A5F;
		--second-col:#3D405B;
		--third-col: #81B29A;
	}

    html{
        font-size:62.5%;
    }

    body{
        font-size:1.6rem;
        font-family: 'Noto Sans', sans-serif;
    }
`;

export default GlobalStyles;

export const WrapperMain = styled.div`
	background-color: #f4f1de;
	min-height: 100vh;
	padding: 2rem;
`;

export const ContainerMain = styled.div`
	max-width: 100rem;
	margin: 0 auto;
	h1 {
		text-align: center;
		font-size: 4rem;
		margin-bottom: 12rem;
	}
`;

export const FlexContainer = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	margin: 2rem 0;
`;

export const TextContainer = styled.div`
	padding-right: 22rem;
	width: 55rem;
	h2 {
		font-size: 2rem;
	}
`;

export const TypeContainer = styled.div`
	padding: 2rem;
	border-radius: 1rem;
	border: 1px solid #ababab;
`;
