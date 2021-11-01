import React from "react";

import "./temperature-units-toggle.styles.css";

function TemperatureUnitsToggle({
	currentTemperatureUnit,
	toggleTemperatureUnit,
}) {
	const celsiusActiveBC =
		currentTemperatureUnit === "celsius" ? "unit--active" : false;
	const fahrenheitActiveBC =
		currentTemperatureUnit === "fahrenheit" ? "unit--active" : false;
	return (
		<div className="temperature-units-toggle">
			<div
				className={`unit ${celsiusActiveBC}`}
				onClick={() => toggleTemperatureUnit("celsius")}
			>
				<span>&#8451;</span>
			</div>
			<div
				className={`unit ${fahrenheitActiveBC}`}
				onClick={() => toggleTemperatureUnit("fahrenheit")}
			>
				<span>&#8457;</span>
			</div>
		</div>
	);
}

export default TemperatureUnitsToggle;

TemperatureUnitsToggle.defaultProps = {
	unit: "celsius",
	toggleTemperatureUnit: (unit) => {},
};
