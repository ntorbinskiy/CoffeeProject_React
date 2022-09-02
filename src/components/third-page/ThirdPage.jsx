import React from "react";
import Header from "../same-components/header/Header";
import Label from "../same-components/label/Label";
import Footer from "../same-components/footer/Footer";
import img from "../../resources/img/third/coff2.jpg";
import "./ThirdPage.sass";
const ThirdPage = () => {
	return (
		<>
			<section className="thirdPage">
				<Header title={"Our Coffee"} />
				<div className="thirdPage_aboutIt">
					<img
						src={img}
						alt="AROMISTICO Coffee 1 kg"
						className="thirdPage_aboutIt_img"
					/>
					<div className="thirdPage_aboutIt_div">
						<Label text={"About it"} />
						<div className="thirdPage_aboutIt_div_country"><b>Country:</b> Brasil</div>
						<div className="thirdPage_aboutIt_div_descr">
						<b>Description: </b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptatum molestias debitis adipisci, dolor in culpa voluptatibus praesentium commodi repellat officia at temporibus vel
							odio perferendis repellendus illo obcaecati corrupti?
						</div>
						<div className="thirdPage_aboutIt_div_price"><b style={{"fontSize" : "14px"}}>Price:</b> 16.99$</div>
					</div>
				</div>
				<Footer />
			</section>
		</>
	);
};

export default ThirdPage;
