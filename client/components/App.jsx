/* eslint-disable */

import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import ShowQuestions from "./ShowQuestions";

const App = () => (
	<div>
		<BrowserRouter>
			<div>
				<Route exact path="/" component={ShowQuestions} />
			</div>
		</BrowserRouter>
	</div>
);

export default App;
