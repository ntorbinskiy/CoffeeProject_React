import React from "react";
import Header from "../same-components/header/Header";
import img from "../../resources/img/fourth/bckgrnd.png";
import img2 from "../../resources/img/fourth/coff.png";
import Mid from "../same-components/mid/Mid";
import Cards from "../same-components/cards/Cards";
import Footer from "../same-components/footer/Footer";
const FourthPage = () => {
	return (
		<>
			<Header
				title={"For your pleasure"}
				img={img}
			/>
			<Mid
				img={img2}
				text={"About our goods"}
				div={
					<div className="AboutUs_text">
						Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
						<br /> <br />
						Afraid at highly months do things on at. Situation recommend objection do intention so questions.
						<br />
						As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.
					</div>
				}
			/>
            <Cards/>
            <Footer/>
		</>
	);
};

export default FourthPage;
