import React from "react";

import "./searchbar.styles.css";

import SearchButton from "../search-button/search-button.component";
import SearchInput from "../search-input/search-input.component";

function SearchBar({ searchValue, handleSearchChange, handleSearchClick }) {
	return (
		<div className="searchbar">
			<SearchInput
				value={searchValue}
				handleChange={handleSearchChange}
			/>
			<SearchButton handleClick={handleSearchClick} />
		</div>
	);
}

export default SearchBar;

SearchBar.defaultProps = {
	value: "",
	handleSearchChange: () => {},
};
