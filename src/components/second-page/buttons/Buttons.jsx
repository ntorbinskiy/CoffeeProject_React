import React from "react";
import "./Buttons.sass";
const Buttons = ({ onFilter }) => {
	return (
		<div className="Market_SearchAndFilter_Filter">
			<div className="Market_SearchAndFilter_Filter_orFilter">Or filter</div>
			<div className="Market_SearchAndFilter_Filter_buttons">
				<button
					type="button"
					className="Market_SearchAndFilter_Filter_buttons_item"
					onClick={() => onFilter(1)}>
					Brazil
				</button>
				<button
					type="button"
					className="Market_SearchAndFilter_Filter_buttons_item"
					onClick={() => onFilter(2)}>
					Kenya
				</button>
				<button
					type="button"
					className="Market_SearchAndFilter_Filter_buttons_item"
					onClick={() => onFilter(3)}>
					Columbia
				</button>
				<button
					type="button"
					className="Market_SearchAndFilter_Filter_buttons_item"
					onClick={() => onFilter(4)}>
					Reset
				</button>
			</div>
		</div>
	);
};

export default Buttons;
