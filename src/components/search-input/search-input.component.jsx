import React from "react";

import "./search-input.styles.css";

function SearchInput({ value, handleChange }) {
	return (
		<div className="search-input">
			<div className="search-input__wrapper">
				<i className="material-icons">search</i>
				<input
					type="text"
					name="search"
					value={value}
					placeholder="search location"
					onChange={handleChange}
				/>
			</div>
		</div>
	);
}

export default SearchInput;

SearchInput.defaultProps = {
	value: "",
	handleChange: () => {},
};
