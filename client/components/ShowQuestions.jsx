/* eslint-disable */

import React, { Component } from "react";

import { connect } from "react-redux";

import * as actions from "../actions";

import getMuiTheme from "material-ui/styles/getMuiTheme";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Form from "./Material-Form";

import ShowResults from "./ShowResults";



class ShowQuestions extends Component {

	// Fetching Questions Data 
	
	componentDidMount() {
		this.props.fetchQuestion();
	}

	// onSubmit Form values selected by the user will go to the Show Results Component 
	onSubmit = values => {
		this.showresults.method(values);

	};
	render() {
		let formData;

		if (this.props.mcqs) {
			formData = this.props.mcqs;
		} else {
			formData = null;
		}
		console.log(this.props.mcqs);

	/* Reference added (<ShowResults onRef={ref => (this.showresults = ref)} /> )
	to send the user input values to the formData 
	More on Reactjs Ref https://reactjs.org/docs/refs-and-the-dom.html */

		return formData !== null ? (
			<MuiThemeProvider muiTheme={getMuiTheme()}>
				<div style={{ padding: 15 }}>
					<h2>Elders Coding Challenge</h2>
					<ShowResults onRef={ref => (this.showresults = ref)} />
					<Form
						formData={formData}
						onSubmit={e => {
							this.onSubmit(e);
						}}
					/>
				</div>
			</MuiThemeProvider>
		) : (
			<div>Loading</div>
		);
	}
}

// Connecting Redux to the ShowQuestions Component

function mapStateToProps({ mcq }) {
	return { mcqs: mcq.data };
}
export default connect(mapStateToProps, actions)(ShowQuestions);