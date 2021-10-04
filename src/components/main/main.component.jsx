import React from "react";

import "./main.styles.css";

import TemperatureUnitsToggle from "../temperature-units-toggle/temperature-units-toggle.component";
import DayCard from "../day-card/day-card.component";
import TodaysHighlights from "../todays-highlights/todays-highlights.component";
import Footer from "../footer/footer.component";

function Main() {
	return (
		<div className="main">
			<div className="main__wrapper">
				<TemperatureUnitsToggle />
				<div className="main__cards">
					<DayCard />
					<DayCard />
					<DayCard />
					<DayCard />
					<DayCard />
				</div>
				<TodaysHighlights />
				<Footer />
			</div>
		</div>
	);
}

export default Main;
