// @ flow

import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Questions from "./Question";

const Dashboard = () => <h1>404 Status , Page NOT FOUND !!!</h1>;

const App = () => (
	<div>
		<BrowserRouter>
			<div>
				<Route exact path="/" component={Questions} />
			</div>
		</BrowserRouter>
	</div>
);

export default App;
