import React , {useState , useEffect} from 'react';
import Card from "../Card"
import styled from "styled-components";
import Menu from '../Menu';
import {Cdata} from "./Cdata"
import { Link } from 'react-router-dom';

function C() {

  return (
    <>
    <Menu></Menu>
    <CardContainer>
		
    {Cdata.map( items =><Card key={items.id} id={items.id}  name={items.name} price ={items.price} img={items.img}  description={items.description} type={items.type}/>)}
    </CardContainer>
    <Total>
				<div className="total">
					Your Cart Total is : <span>0 </span>/-
				</div>
				<div>
				<Link to="/cart"><button>Check Out</button></Link>	
				</div>
			</Total>
    </>

  )
}

export default C;

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