/* eslint-disable  */

/* eslint-disable  */

import React, { Component } from "react";

import axios from "axios";

import ShowModal from "../components/showModal";

class Answers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			correctAnswers: [],
			userAnswers: [],
			Total: 0,
				};
	}

	/* Reference added to get the user values from the formData 
	More on Reactjs Ref https://reactjs.org/docs/refs-and-the-dom.html */

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
	componentWillUnmount() {
		this.props.onRef(undefined);
	}
	method(values) {
		this.setState({ userAnswers: values });
	}
	
	render() {
		const userAnswers = this.state.userAnswers;
		const correctAnswers = this.state.correctAnswers;
		


		let Total = this.state.Total;
		
		// Getting the Right Answers

		const correctAnswers = this.state.correctAnswers.map(
			answer => answer.answer
		);
		
		const userAnswers = this.state.userAnswers;
		
		let wrongAnswersArr = [];

		// Finding out the Total Right Question 		
		
		const findingTotal = userAnswers.forEach(
			(value, index) =>
				value === correctAnswers[index]
					? (Total += 1)
					: wrongAnswersArr.push(index)
		);

		console.log(correctAnswers);
		return (
			<div>
				<ShowModal
					total={Total}
					wrongAnswers={findingCorrectAnswer}
					correctAnswers = {correctAnswers}
				/>
			</div>
		);
	}
}

export default Answers;

