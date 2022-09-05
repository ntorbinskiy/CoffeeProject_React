import { useCallback, useEffect } from "react";
import { React, useState } from "react";
import img2 from "../../../../resources/img/second/lookfor.png";
import "./CardsItem.sass";
const countries = {
	1: "Brazil",
	2: "Kenya",
	3: "Columbia",
};
const CardsItem = ({ title, country,cost }) => {
// console.log(title);
// console.log(country);
// console.log(cost);
	return (
		<div className="Cards_item">
			<img
				src={img2}
				alt=""
				className="Cards_item_img"
			/>
			<div className="Cards_item_title">{title}</div>
			<div className="Cards_item_country">{countries[country]}</div>
			<div className="Cards_item_cost">{cost}</div>
		</div>
	);
};

export default CardsItem;
