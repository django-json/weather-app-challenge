import React, { createElement } from "react";

import "./search-list.styles.css";

import SearchListItem from "../search-list-item/search-list-item.component";

function SearchList({ items, itemRenderer, className, ...props }) {
	return (
		<ul className="search-list">
			{items.map((item, index) => {
				// Set new props to itemRenderer
				const newProps = Object.assign(
					{ key: index },
					{ item },
					{ ...props }
				);

				// Assign new props to itemRenderer
				return createElement(itemRenderer, newProps);
			})}
		</ul>
	);
}

export default SearchList;

SearchList.defaultProps = {
	items: ["London", "Manila", "New Delhi"],
	itemRenderer: SearchListItem,
};
