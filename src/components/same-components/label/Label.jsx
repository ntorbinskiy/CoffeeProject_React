import React from "react";
import Logo from "../logo/Logo";
import "./Label.sass";
const Label = ({ text,style}) => {
	return (
		<div className="label" style={style}>
			<h2
				className="AboutUs_AboutOurBeans">
				{text}
			</h2>
			<Logo edition="black" style2={{"marginTop" : "20px"}} />
		</div>
	);
};

export default Label;
