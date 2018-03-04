/* eslint-disable */

import React from "react";
import { Field, reduxForm } from "redux-form";
import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";
import answers from "../helpers/showResults";

// Component Responsible for rendering Field
const renderRadioGroup = ({ input, ...rest }) => (
  <RadioButtonGroup
    {...input}
    {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);


// Basic Boiler Plate for Material Ui Form
const MaterialUiForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  console.log(props.formData);
  return (
    <form onSubmit={handleSubmit}>
      {allQuestions}
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

// Connected to the reduxForm 
export default reduxForm({
  form: "MaterialUiForm" // a unique identifier for this form
})(MaterialUiForm);
