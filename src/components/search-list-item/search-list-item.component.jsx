import React from "react";

import "./search-list-item.styles.css";

function SearchListItem({ item, handleSearchResultItemClick }) {
	return (
		<li
			className="search-list-item"
			onClick={() => handleSearchResultItemClick(item.woeid)}
		>
			{item.title}
		</li>
	);
}

export default SearchListItem;

SearchListItem.defaultProps = {
	item: "London",
	getWeatherByCityId: (id) => {},
};
