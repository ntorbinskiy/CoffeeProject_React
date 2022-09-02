import "./SecondPage.sass";
import React from "react";
import img from "../../resources/img/second/img2.png";
import Cards from "../same-components/cards/Cards";
import Footer from "../same-components/footer/Footer";
import Header from "../same-components/header/Header";
import Mid from "../same-components/mid/Mid";
const SecondPage = () => {
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
					<div className="Market_SearchAndFilter_Search">
						<div className="Market_SearchAndFilter_Search_lookingFor">Looking for</div>
						<input
							type="text"
							placeholder="start typing here..."
							className="Market_SearchAndFilter_Search_input"
						/>
					</div>
					<div className="Market_SearchAndFilter_Filter">
						<div className="Market_SearchAndFilter_Filter_orFilter">Or filter</div>
						<div className="Market_SearchAndFilter_Filter_buttons">
							<button className="Market_SearchAndFilter_Filter_buttons_item">Brazil</button>
							<button className="Market_SearchAndFilter_Filter_buttons_item">Kenya</button>
							<button className="Market_SearchAndFilter_Filter_buttons_item">Columbia</button>
						</div>
					</div>
				</div>
			</section>
			<Cards />
			<Footer />
		</>
	);
};

export default SecondPage;
