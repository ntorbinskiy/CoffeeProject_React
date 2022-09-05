import React from "react";
import "./SearchPanel.sass";
const SearchPanel = ({ onTerm }) => {
	return (
		<div className="Market_SearchAndFilter_Search">
			<div className="Market_SearchAndFilter_Search_lookingFor">Looking for</div>
			<input
				type="text"
				placeholder="start typing here..."
				className="Market_SearchAndFilter_Search_input"
				onChange={(e) => onTerm(e)}
			/>
		</div>
	);
};

export default SearchPanel;
