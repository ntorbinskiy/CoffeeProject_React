import React from "react";
import Label from "../label/Label";
import "./Mid.sass";
const Mid = ({ img, div, text}) => {
	return (
		<section className="AboutUs">
			<img
				src={img}
				alt=""
				className="AboutUs_img"
			/>
			<div className="AboutUs_div">
				<Label text={text}  />
				{div}
			</div>
		</section>
	);
};

export default Mid;
