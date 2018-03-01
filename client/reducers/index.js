import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import mcqReducer from "./mcqReducer";

export default combineReducers({
	mcq: mcqReducer,
	form: formReducer
});
