import React from "react";

import DayCard from "./day-card.component";

import { formatDateTo, addDateBy } from "../../utils/utils";

function DayCardContainer({ cityForecastWeather, currentTemperatureUnit }) {
	return cityForecastWeather.map((forecastWeather) => {
		let {
			id,
			applicable_date,
			min_temp,
			max_temp,
			weather_state_abbr,
		} = forecastWeather;

		applicable_date = formatDateTo(applicable_date, "ddd, D MMM");

		const tomorrow_date = formatDateTo(
			addDateBy(null, 1, "days"),
			"ddd, D MMM"
		);

		return (
			<DayCard
				key={id}
				applicable_date={
					applicable_date === tomorrow_date
						? "Tomorrow"
						: applicable_date
				}
				min_temp={min_temp}
				max_temp={max_temp}
				weather_state_abbr={weather_state_abbr}
				currentTemperatureUnit={currentTemperatureUnit}
			/>
		);
	});
}

export default DayCardContainer;
