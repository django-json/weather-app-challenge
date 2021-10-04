import React from "react";

import "./sidebar.styles.css";

function SideBar() {
	return (
		<div className="sidebar">
			<div className="sidebar__heading">
				<div className="sidebar__search">Search for places</div>
				<i className="material-icons">my_location</i>
			</div>
			<div className="sidebar__today">
				<div className="sidebar__image">
					<img
						src={require("../../assets/img/Shower.png").default}
						alt="Temperature Status"
					/>
				</div>
				<div className="sidebar__valueunit">
					<span className="sidebar__value">15</span>
					<span className="sidebar__unit">&#8451;</span>
				</div>
				<p className="sidebar__status">Shower</p>
				<div className="sidebar__datetimeplace">
					<div>
						<span className="sidebar__day">Today</span>
						<span className="sidebar__date">Fri. 5 Jun</span>
					</div>
					<div className="sidebar__location">
						<i className="material-icons">place</i>
						<span>Helsinki</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SideBar;
