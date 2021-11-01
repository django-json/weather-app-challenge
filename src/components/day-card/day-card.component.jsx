import React from "react";

import "./day-card.styles.css";

import { getTemperatureStatusImage, convertTo } from "../../utils/utils";

function DayCard({
	applicable_date,
	min_temp,
	max_temp,
	weather_state_abbr,
	currentTemperatureUnit,
}) {
	const temperatureUnit =
		currentTemperatureUnit === "celsius" ? (
			<span>&#8451;</span>
		) : (
			<span>&#8457;</span>
		);

	const temperatureStatus = getTemperatureStatusImage(weather_state_abbr);

	return (
		<div className="day-card">
			<h4 className="day-card__day">{applicable_date}</h4>
			<div className="day-card__temperature-image">
				<img
					src={
						require(`../../assets/img/${temperatureStatus}`).default
					}
					alt="Temperature Status"
				/>
			</div>
			<div className="day-card__temperature-minmax">
				<span>
					{convertTo(currentTemperatureUnit, Math.floor(max_temp))}
					{temperatureUnit}
				</span>
				<span>
					{convertTo(currentTemperatureUnit, Math.floor(min_temp))}
					{temperatureUnit}
				</span>
			</div>
		</div>
	);
}

export default DayCard;
