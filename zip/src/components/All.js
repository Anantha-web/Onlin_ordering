import React, { useEffect, useState , useContext } from "react";
import Card from "./Card";

const All = () => {
	const [state, setState] = useState([]);
	const all = async () => {
		await fetch("all.json", {
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
		all();
	}, []);
	return (
        <>
        {state.map( items =><Card id={items.id}  name={items.name} price ={items.price} img={items.img} description={items.description}/>)}
        </>
    )
};

export default All;
