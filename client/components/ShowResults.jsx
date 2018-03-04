/* eslint-disable  */

/* eslint-disable  */

import React, { Component } from "react";

import axios from "axios";

import ShowModal from "../components/showModal";

class Answers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userAnswers: []
		};
	}
	
	/* Reference added to get the user values from the formData 
	More on Reactjs Ref https://reactjs.org/docs/refs-and-the-dom.html */

	componentDidMount() {
		this.props.onRef(this);
	}
	componentWillUnmount() {
		this.props.onRef(undefined);
	}
	method(values) {
		this.setState({ userAnswers: values });
	}
	
	render() {

		const userAnswers = this.state.userAnswers;
		console.log(userAnswers);
		return (
			<div>
				<ShowModal
					userAnswers={userAnswers}
				/>
			</div>
		);
	}
}

export default Answers;
