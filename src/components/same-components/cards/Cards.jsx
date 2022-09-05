/* eslint-disable default-case */
import { React, useState } from "react";
import CardsItem from "./cards-item/CardsItem";
import nextId from "react-id-generator";
import "./Cards.sass";

const Cards = ({ visData }) => {
	const newArr = [];
	let id;
	if (visData.length===0) {
		console.log("pizda");
		return <div style={{"textAlign" : "center","fontSize" : "20px"}}>No  goods!</div>;
	}
	console.log(visData);
	for (let i = 0; i < visData.length; i++) {
		id = nextId();
		newArr.push(
			<CardsItem
				key={id}
				title={visData[i].title}
				country={visData[i].country}
				cost={visData[i].cost}
			/>
		);
	}

	return (
		<>
			<section className="Cards">{newArr}</section>
		</>
	);
};

export default Cards;
