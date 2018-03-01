/* eslint-disable */

import axios from "axios";

import { FETCH_QUESTION } from "./type";

export const fetchQuestion = () => async dispatch => {
	const request = await axios.get(
		"https://gist.githubusercontent.com/aaqibkhaan/c1632768853b691d22d0722910962ef3/raw/f637b7189bc1d0cf77b4e746fe1a5bb09af06c32/mcqs.json"
	);

	dispatch({
		type: FETCH_QUESTION,
		payload: request // Middleware promise will resolve this request for us
	});
};
