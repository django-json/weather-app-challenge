import React from "react";

import "./progress-bar.styles.css";

function ProgressBar({ percentage }) {
	return (
		<div className="progress-bar">
			<div
				className="progress-bar__filler"
				style={{ width: `${percentage}%` }}
			/>
		</div>
	);
}

export default ProgressBar;

ProgressBar.defaultProps = {
	percentage: 84,
};
