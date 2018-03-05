

import React, { Component } from "react";

import axios from "axios";

import ShowModal from "./ShowModal";

class ShowResults extends Component {
	constructor(props) {
		super(props);
		this.state = {
			correctAnswers: [],
			userAnswers: [],
			Total: 0
		};
	}

	/* Reference added to get the user values from the formData 
	More on Reactjs Ref https://reactjs.org/docs/refs-and-the-dom.html */

/* eslint-disable */

	componentDidMount() {
		this.props.onRef(this);
		axios
			.get(
				"https://gist.githubusercontent.com/aaqibkhaan/31633269daa07186578c72f18578def3/raw/35db68c551aa0252bbbbecc5d74b219c2bdbb899/answers.js"

			)
			.then(resp => {
				this.setState({ correctAnswers: resp.data.answers });
			});
	}

	// Delete the reference once component is unmounted

	componentWillUnmount() {
		this.props.onRef(undefined);
	}
	
	method(values) {
		this.setState({ userAnswers: values });
	}
	
	render() {


		// Getting the Right Answers

		let  Total = this.state.Total;
		const correctAnswers = this.state.correctAnswers.map(
			answer => answer.answer
		);
		
		let userAnswers = this.state.userAnswers;
		
		const wrongAnswersArr = [];

		// Finding out the Total Right Question
// eslint-disable next-line 	
		const findingTotal = userAnswers.forEach(
			(value, index) =>
				value === correctAnswers[index]
					? (Total += 1)
					: wrongAnswersArr.push(index)
		);

		// Finding the Wrong Number of Answers given by User

	const wrongAnswersByUser = wrongAnswersArr.map(value => 
			this.state.correctAnswers[value]
		);

	
	
		return (
			<div>
				<ShowModal
					total={Total}
					wrongAnswers={wrongAnswersByUser}
				/>
			</div>
		);
	}
}

export default ShowResults;
