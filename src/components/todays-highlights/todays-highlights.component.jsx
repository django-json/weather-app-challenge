import React from "react";

import "./todays-highlights.styles.css";

import ProgressBar from "../progress-bar/progress-bar.component";

function TodaysHighlights() {
	return (
		<div className="todays-highlights">
			<h3 className="todays-highlights__title">Today's Highlights</h3>
			<div className="todays-highlights__wrapper">
				<div className="todays-highlights__highlight">
					<h4>Wind status</h4>
					<p>
						7<span>mph</span>
					</p>
					<p className="todays-highlights__direction">
						<span className="material-icons">navigation</span>N
					</p>
				</div>
				<div className="todays-highlights__highlight">
					<h4>Humidity</h4>
					<p>
						84<span>%</span>
					</p>
					<div className="todays-highlights__progress-bar-labels">
						<span>0</span>
						<span>50</span>
						<span>100</span>
					</div>
					<ProgressBar />
					<div className="percent">%</div>
				</div>
				<div className="todays-highlights__highlight">
					<h4>Visibility</h4>
					<p>
						6,4 <span>miles</span>
					</p>
				</div>
				<div className="todays-highlights__highlight">
					<h4>Air Pressure</h4>
					<p>
						998 <span>mb</span>
					</p>
				</div>
			</div>
		</div>
	);
}

export default TodaysHighlights;
