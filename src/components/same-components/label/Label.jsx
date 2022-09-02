import React from "react";
import Logo from "../logo/Logo";
import "./Label.sass";
const Label = ({ text }) => {
	return (
		<div className="styles">
			<h2
				className="AboutUs_AboutOurBeans"
				style={{ fontSize: "24px" }}>
				{text}
			</h2>
			<Logo edition="black" style2={{"marginTop" : "20px"}} />
		</div>
	);
};

export default Label;
