/* eslint-disable */

import axios from "axios";

import { FETCH_QUESTION } from "./type";

export const fetchQuestion = () => async dispatch => {
	const request = await axios.get(
		"https://gist.githubusercontent.com/aaqibkhaan/a9d64b5b87c9613a559a18afedec6a40/raw/afbab8a71b9f255a36a2bcf610f84cef4b57fe6b/mcqs1.json"
	);

	dispatch({
		type: FETCH_QUESTION,
		payload: request // Middleware promise will resolve this request for us
	});
};
