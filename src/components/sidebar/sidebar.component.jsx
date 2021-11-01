import React from "react";

import "./sidebar.styles.css";

import SearchNavigationDrawer from "../search-navigation-drawer/search-navigation-drawer.component";

import {
	getTemperatureStatusImage,
	convertTo,
	formatDateTo,
} from "../../utils/utils";

function SideBar({
	isOpenSearchNavigationDrawer,
	openSearchNavigationDrawer,
	clearSearchNavigationDrawer,
	cityTodaysWeather,
	currentTemperatureUnit,
	getUserPosition,
	...props
}) {
	const temperatureUnit =
		currentTemperatureUnit === "celsius" ? (
			<span className="sidebar__unit">&#8451;</span>
		) : (
			<span className="sidebar__unit">&#8457;</span>
		);

	const temperatureStatus = getTemperatureStatusImage(
		cityTodaysWeather.weather_state_abbr
	);

	return isOpenSearchNavigationDrawer ? (
		<SearchNavigationDrawer
			clearSearchNavigationDrawer={clearSearchNavigationDrawer}
			{...props}
		/>
	) : (
		<div className="sidebar">
			<div className="sidebar__heading">
				<div
					className="sidebar__search"
					onClick={openSearchNavigationDrawer}
				>
					Search for places
				</div>
				<i
					className="sidebar__my-location material-icons"
					onClick={() => getUserPosition()}
				>
					my_location
				</i>
			</div>
			<div className="sidebar__today">
				<div className="sidebar__image">
					<img
						src={
							require(`../../assets/img/${temperatureStatus}`)
								.default
						}
						alt="Temperature Status"
					/>
				</div>
				<div className="sidebar__valueunit">
					<span className="sidebar__value">
						{convertTo(
							currentTemperatureUnit,
							Math.floor(cityTodaysWeather.the_temp)
						)}
					</span>
					{temperatureUnit}
				</div>
				<p className="sidebar__status">
					{cityTodaysWeather.weather_state_name}
				</p>
				<div className="sidebar__datetimeplace">
					<div>
						<span className="sidebar__day">Today</span>
						<span className="sidebar__date">
							{formatDateTo(
								cityTodaysWeather.applicable_date,
								"ddd. D MMM"
							)}
						</span>
					</div>
					<div className="sidebar__location">
						<i className="material-icons">place</i>
						<span>{cityTodaysWeather.cityTitle}</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SideBar;
