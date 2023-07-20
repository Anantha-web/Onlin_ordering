import React , {useState , useEffect} from 'react';
import Card from "./Card"
import styled from "styled-components";
import Menu from './Menu';

function Addons() {
    const [state, setState] = useState([]);
	const addon = async () => {
		await fetch("addon.json", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
				setState(data);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	useEffect(() => {
		addon();
	}, []);

  return (
    <>
    {/* hii */}
    <Menu></Menu>
    <CardContainer>

    {state.map( items =><Card id={items.id}  name={items.name} price ={items.price} img={items.img}  description={items.description}/>)}
    </CardContainer>
    <Total>
				<div className="total">
					Your Cart Total is : <span>0 </span>/-
				</div>
				<div>
					<button>Check Out</button>
				</div>
			</Total>
    </>

  )
}

export default Addons;

const CardContainer = styled.div`
	margin-top: 5rem;
	display: grid;
	grid-template-columns: 23% 23% 23% 23%;
	justify-items: center;
	gap: 2rem;
`;

const Total = styled.div`
	position: sticky;
	z-index: 5;
	margin-top: 15.5rem;

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