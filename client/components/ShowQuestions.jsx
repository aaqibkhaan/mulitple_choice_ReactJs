// @ flow

import React, { Component } from "react";

import { connect } from "react-redux";

import getMuiTheme from "material-ui/styles/getMuiTheme";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import PropTypes from "prop-types";

import Form from "./UiForm";

import ShowResults from "./ShowResults";

import Spinner from "./Spinner";


import * as actions from "../actions";


class ShowQuestions extends Component {

	// Fetching Questions Data 
	
	componentDidMount() {
		this.props.fetchQuestion();
	}

	// onSubmit Form values selected by the user will go to the Show Results Component 
	onSubmit = values => {
		this.showresults.method(values);
	}
	render() {
		let formData;

		if (this.props.mcqs) {
			formData = this.props.mcqs;
		} else {
			formData = null;
		}


	/* Reference added (<ShowResults onRef={ref => (this.showresults = ref)} /> )
	to send the user input values to the formData 
	More on Reactjs Ref https://reactjs.org/docs/refs-and-the-dom.html */

/* eslint-disable */
		return formData !== null ? (
			<MuiThemeProvider muiTheme={getMuiTheme()}>
				<div style={{ padding: 15 }}>
					<h3 className="main-title text-center">Multiple Choice Questions in ReactJs/Redux</h3>
					<ShowResults onRef={ref => (this.showresults = ref)} />
					<Form
						formData={formData}
						onSubmit={e => {
							this.onSubmit(e);
						}}
					/>
				</div>
			</MuiThemeProvider>
		) : (<div className="spinner">
			<Spinner />
			</div>		);
	}
}

// Connecting Redux to the ShowQuestions Component

ShowQuestions.propTypes = {
  mcqs: PropTypes.objectOf(PropTypes.array),
  fetchQuestion: PropTypes.func.isRequired
};


ShowQuestions.defaultProps = {
	mcqs: PropTypes.isNotNull
}

function mapStateToProps({ mcq }) {
	return { mcqs: mcq.data };
}
export default connect(mapStateToProps, actions)(ShowQuestions);