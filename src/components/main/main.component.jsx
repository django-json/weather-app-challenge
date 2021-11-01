import React from "react";

import "./main.styles.css";

import TemperatureUnitsToggle from "../temperature-units-toggle/temperature-units-toggle.component";
import DayCardContainer from "../day-card/day-card.container";
import TodaysHighlights from "../todays-highlights/todays-highlights.component";
import Footer from "../footer/footer.component";

function Main({
	cityTodaysWeather,
	cityForecastWeather,
	currentTemperatureUnit,
	toggleTemperatureUnit,
}) {
	const {
		wind_speed,
		wind_direction,
		wind_direction_compass,
		air_pressure,
		humidity,
		visibility,
	} = cityTodaysWeather;
	return (
		<div className="main">
			<div className="main__wrapper">
				<TemperatureUnitsToggle
					currentTemperatureUnit={currentTemperatureUnit}
					toggleTemperatureUnit={toggleTemperatureUnit}
				/>
				<div className="main__cards">
					<DayCardContainer
						cityForecastWeather={cityForecastWeather}
						currentTemperatureUnit={currentTemperatureUnit}
					/>
				</div>
				<TodaysHighlights
					wind_speed={wind_speed}
					wind_direction={wind_direction}
					wind_direction_compass={wind_direction_compass}
					air_pressure={air_pressure}
					humidity={humidity}
					visibility={visibility}
				/>
				<Footer />
			</div>
		</div>
	);
}

export default Main;
