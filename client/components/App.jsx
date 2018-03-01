// @ flow

import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

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
