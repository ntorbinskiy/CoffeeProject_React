import "./SecondPage.sass";
import { React, useState, useEffect } from "react";
import img from "../../resources/img/second/img2.png";
import Cards from "../same-components/cards/Cards";
import Footer from "../same-components/footer/Footer";
import Header from "../same-components/header/Header";
import Mid from "../same-components/mid/Mid";
import SearchPanel from "./search-panel/SearchPanel";
import Buttons from "./buttons/Buttons";
import { useCallback } from "react";
const rndNumArr = () => {
	return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
};
const numArr = [];

for (let i = 0; i < 6; i++) {
	numArr.push(rndNumArr());
}
const SecondPage = () => {
	const [term, setTerm] = useState("");
	const [countryFilter, setCountryFilter] = useState(0);
	const [coffee, setCoffee] = useState([]);
	const [data, setData] = useState([]);
	useEffect(() => {
		const coffeeArr = [];
		for (let i = 0; i < 6; i++) {
			coffeeArr.push({
				title: `AROMISTICO Coffee ${i + 1}kg`,
				country: numArr[i],
				cost: "6.99$",
			});
		}
		setCoffee(coffeeArr);
	}, []);
	const onFilter = (filter) => {
		setCountryFilter(filter);
	};

	const onTerm = (e) => {
		const value = e.target.value;
		setTerm(value.toLowerCase());
	};
	const filterItem = useCallback((country, items) => {
		console.log("rabotaet");
		// eslint-disable-next-line default-case
		switch (country) {
			case 1:
				return items.filter((i) => i.country === 1);
			case 2:
				return items.filter((i) => i.country === 2);
			case 3:
				return items.filter((i) => i.country === 3);
			default:
				return items;
		}
	}, []);
	const searchItem = useCallback((items, term) => {
		if (term.length === 0) {
			return items;
		}
		console.log(term);
		return items.filter((item) => {
			return item.title.toLowerCase().indexOf(term) > -1;
		});
	}, []);
	useEffect(() => {
		console.log("effect");
		setData(filterItem(countryFilter, searchItem(coffee, term)));
		// eslint-disable-next-line no-use-before-define
	}, [countryFilter, filterItem, searchItem, coffee, term]);

	// console.log(visData);

	return (
		<>
			<Header title={"Our Coffee"} />
			<Mid
				img={img}
				div={
					<div className="AboutUs_text">
						Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
						<br /> <br />
						Afraid at highly months do things on at. Situation recommend objection do intention so questions.
						<br />
						As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.
					</div>
				}
				text={"About our beans"}
			/>
			<section className="Market">
				<div className="Market_SearchAndFilter">
					<SearchPanel onTerm={onTerm} />
					<Buttons onFilter={onFilter} />
				</div>
			</section>
			<Cards visData={data} />
			<Footer />
		</>
	);
};

export default SecondPage;
