import React from "react";

import "./todays-highlights.styles.css";

import ProgressBar from "../progress-bar/progress-bar.component";

function TodaysHighlights({
	wind_speed,
	wind_direction,
	wind_direction_compass,
	air_pressure,
	humidity,
	visibility,
}) {
	return (
		<div className="todays-highlights">
			<h3 className="todays-highlights__title">Today's Highlights</h3>
			<div className="todays-highlights__wrapper">
				<div className="todays-highlights__highlight">
					<h4>Wind status</h4>
					<p>
						{Math.floor(wind_speed)}
						<span> mph</span>
					</p>
					<p className="todays-highlights__direction">
						<span
							className="material-icons"
							style={{
								transform: `rotate(${wind_direction}deg)`,
							}}
						>
							navigation
						</span>
						{wind_direction_compass}
					</p>
				</div>
				<div className="todays-highlights__highlight">
					<h4>Humidity</h4>
					<p>
						{Math.floor(humidity)}
						<span> %</span>
					</p>
					<div className="todays-highlights__progress-bar-labels">
						<span>0</span>
						<span>50</span>
						<span>100</span>
					</div>
					<ProgressBar percentage={Math.floor(humidity)} />
					<div className="percent">%</div>
				</div>
				<div className="todays-highlights__highlight">
					<h4>Visibility</h4>
					<p>
						{Math.floor(visibility)}
						<span> miles</span>
					</p>
				</div>
				<div className="todays-highlights__highlight">
					<h4>Air Pressure</h4>
					<p>
						{Math.floor(air_pressure)}
						<span> mb</span>
					</p>
				</div>
			</div>
		</div>
	);
}

export default TodaysHighlights;
