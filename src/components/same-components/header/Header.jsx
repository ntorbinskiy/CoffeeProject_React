import React from "react";
import Menu from "../menu/Menu";
import "./Header.sass";
const header = ({title,img}) => {
	
	return (
		<>
			<section className="header_2" style={img ? {"backgroundImage" : `url(${img})`} : null}>
				<Menu
					color="white"
					align="def"
				/>
				<h1 className="header_2_OurCoffee">{title}</h1>
			</section>
		</>
	);
};

export default header;
