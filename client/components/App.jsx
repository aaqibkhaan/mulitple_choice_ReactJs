/* eslint-disable */

import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Index from "./ShowQuestions";

const App = () => (
	<div>
		<BrowserRouter>
			<div>
				<Route exact path="/" component={Index} />
			</div>
		</BrowserRouter>
	</div>
);

export default App;
