import React from "react";

import "./day-card.styles.css";

function DayCard() {
	return (
		<div className="day-card">
			<h4 className="day-card__day">Sun, 7 Jun</h4>
			<div className="day-card__temperature-image">
				<img
					src={require("../../assets/img/Shower.png").default}
					alt="Temperature Status"
				/>
			</div>
			<div className="day-card__temperature-minmax">
				<span>16&#8451;</span>
				<span>11&#8451;</span>
			</div>
		</div>
	);
}

export default DayCard;
