import React from "react";

import "./error.styles.css";

function Error() {
	return (
		<div className="error">
			<h1 className="error__message">
				Caught an error. Please click{" "}
				<a
					href="https://cors-anywhere.herokuapp.com/"
					target="_blank"
					rel="noreferrer"
				>
					cors-anywhere.herokuapp.com
				</a>{" "}
				and click "Request temporary access to the demo server" and
				reload the page.
			</h1>
		</div>
	);
}

export default Error;
