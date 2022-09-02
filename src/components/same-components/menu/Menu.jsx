import React from "react";
import logoWhite from "../../../resources/img/logo/logoWhite.png";
import logoBlack from "../../../resources/img/logo/logoBlack2.png";
import { Link } from "react-router-dom";
import "./Menu.sass";

const Menu = ({ color, align, padding}) => {
	let className = "Menu_link_item";
	let className2 = "Menu_link_item Menu_link_item_logo";
	let className3 = "Menu_link";
	if (color === "black") {
		className += " black";
	}
	if (align === "center") {
		className2 += " center";
		className3 += " flex";
	}
	return (
		<div className="Menu" style={padding}>
			<div className={className3}>
				<Link to="/">
					<img
						src={color === "black" ? logoBlack : logoWhite}
						alt="#"
						className={className2}
					/>
				</Link>
				<Link
					to="/thirdpage"
					className={className}>
					Coffee house
				</Link>
				<Link
					to="/secondpage"
					className={className}>
					Our coffee
				</Link>
				<Link
					to="/fourthpage"
					className={className}>
					For your pleasure
				</Link>
			</div>
		</div>
	);
};

export default Menu;
