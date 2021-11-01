import React from "react";

import "./search-button.styles.css";

function SearchButton({ handleClick }) {
	return (
		<button className="search-button" onClick={handleClick}>
			Search
		</button>
	);
}

export default SearchButton;

SearchButton.defaultProps = {
	handleClick: () => {},
};
