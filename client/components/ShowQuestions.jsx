/* eslint-disable */

import React, { Component } from "react";

import { connect } from "react-redux";

import * as actions from "../actions";


class ShowQuestions extends Component {
	componentDidMount() {
		this.props.fetchQuestion();
	}

	render() {

		console.log(this.props.mcqs);

		return (<div>Form Data is Working</div>);
	}
}

// Connecting Redux to the ShowQuestions Component

function mapStateToProps({ mcq }) {
	return { mcqs: mcq.data };
}
export default connect(mapStateToProps, actions)(ShowQuestions);