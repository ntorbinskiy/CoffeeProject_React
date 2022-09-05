/* eslint-disable default-case */
import { React } from "react";
import CardsItem from "./cards-item/CardsItem";
import nextId from "react-id-generator";
import "./Cards.sass";

const Cards = ({ visData }) => {
	const newArr = [];
	let id;
	if (visData) {
		if (visData.length === 0) {
			return <div style={{ textAlign: "center", fontSize: "20px" }}>No goods!</div>;
		}
	}
	console.log(visData);
	if (visData) {
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
	} else  {
		for (let i = 0; i < 6; i++) {
			id = nextId();
			newArr.push(
				<CardsItem
					key={id}
					title={`AROMISTICO Coffee ${i + 1}kg`}
					country={"Brazil"}
					cost={"6.99$"}
				/>
			);
		}
	}

	return (
		<>
			<section className="Cards">{newArr}</section>
		</>
	);
};

export default Cards;
