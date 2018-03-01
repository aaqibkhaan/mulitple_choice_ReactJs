// @ flow

import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

const appID = document.getElementById("app");
const renderApp = () => {
	render(
		<BrowserRouter>
			<App />
		</BrowserRouter>,
		appID
	);
};

renderApp();
