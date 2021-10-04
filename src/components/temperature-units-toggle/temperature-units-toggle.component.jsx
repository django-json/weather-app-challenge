import React from "react";

import "./temperature-units-toggle.styles.css";

function TemperatureUnitsToggle() {
	return (
		<div className="temperature-units-toggle">
			<div className="unit">
				<span>&#8451;</span>
			</div>
			<div className="unit">
				<span>&#8457;</span>
			</div>
		</div>
	);
}

export default TemperatureUnitsToggle;
