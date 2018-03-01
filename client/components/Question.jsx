/* eslint-disable */

import React, { Component } from "react";

import { connect } from "react-redux";

import * as actions from "../actions";

class Questions extends Component {
	componentDidMount() {
		this.props.fetchQuestion();
	}
	render() {
		let formData;
		// eslint-disable no-console

		if (this.props.mcqs) {
			formData = this.props.mcqs;
		} else {
			formData = null;
		}
		console.log(this.props.mcqs);

		return <div>{formData}</div>;
	}
}

function mapStateToProps({ mcq }) {
	return { mcqs: mcq.data };
}
export default connect(mapStateToProps, actions)(Questions);
