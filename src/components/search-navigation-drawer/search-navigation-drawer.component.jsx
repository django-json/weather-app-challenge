import React from "react";

import "./search-navigation-drawer.styles.css";

import SearchBar from "../searchbar/searchbar.component";
import SearchList from "../search-list/search-list.component";

function SearchNavigationDrawer({
	clearSearchNavigationDrawer,
	cities,
	searchResultsVisibility,
	handleSearchResultItemClick,
	...props
}) {
	return (
		<div className="search-navigation-drawer">
			<div className="search-navigation-drawer__close">
				<i
					className="material-icons"
					onClick={clearSearchNavigationDrawer}
				>
					close
				</i>
			</div>
			<SearchBar {...props} />
			{searchResultsVisibility && (
				<SearchList
					items={cities}
					handleSearchResultItemClick={handleSearchResultItemClick}
				/>
			)}
		</div>
	);
}

export default SearchNavigationDrawer;

SearchNavigationDrawer.defaultProps = {
	toggleSearchDrawer: () => {},
	cities: [],
};
