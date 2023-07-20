import styled from "styled-components";
import Menu from "./Menu";
import Shops from "./shops";


function CustomerLandingPage() {

	return (
		<Container >

				<Menu></Menu>
				<Shops />

		</Container>
	);
}

export default CustomerLandingPage;

const Total = styled.div`
	position: sticky;
	z-index: 5;
	// margin-top: 15.5rem;

	bottom: 0;
	background: rgb(255, 165, 0, 0.75);
	height: 7vh;
	display: flex;
	gap: 1rem;
	justify-content: end;
	padding-right: 2rem;

	span {
		color: red;
	}
	.total {
		font-weight: 600;
	}
	div {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	button {
		cursor: pointer;
		height: 60%;
		border-radius: 4px;
		border: 1px solid black;
		outline: none;
		background: rgb(255, 165, 0, 0.9);
	}
`;
const Container = styled.div`
	width: 100%;
	height: 100%;
`;

const CardContainer = styled.div`
	margin-top: 5rem;
	display: grid;
	grid-template-columns: 23% 23% 23% 23%;
	justify-items: center;
	gap: 2rem;
`;
