
import React from "react";

import { Field, reduxForm } from "redux-form";

import PropTypes from "prop-types";

import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";

import styled from "styled-components";

const Wrapper = styled.div`
  padding-bottom: 3rem;

`;

const Label = styled.label`
padding-bottom: 1rem;

`


// Component Responsible for rendering Field

/* eslint-disable */

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioButtonGroup
    {...input}
    {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />);
/* eslint-enable */

// Basic Boiler Plate for Material Ui Form

const MaterialUiForm = props => {

const { handleSubmit, pristine, reset, submitting } = props;

// Mapping over the Question props coming from ShowQuestions.jsx and Getting Id , Question , and Options array

  const allQuestions = props.formData.questions.map((question , index) => 
      <Wrapper key={question.id} {...question}>
      <div className="list-group text-center">
        <strong><Label htmlFor={question.question}>{index + 1 } )  {question.question}</Label></strong>
        <div>
          <Field
            key={question.id}
            name={question.id}
            component={renderRadioGroup}
            
          >
            {question.options.map(option => 
                <RadioButton
                  key={option.id}
                  value={option.id}
                  label={option.text}
                  required
                  className="list-group-item"
                />
            )}
          </Field>
        </div>
      </div>
      </Wrapper>
  );

  return (
    <form onSubmit={handleSubmit}>
      {allQuestions}
      <div>
        <button className= "btn btn-primary"  type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button className= "btn btn-danger padding-left"  type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

MaterialUiForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine : PropTypes.bool.isRequired,
  reset : PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  formData: PropTypes.objectOf(PropTypes.array).isRequired
};


MaterialUiForm.defaultProps = {
  input: PropTypes.isNotNull
}

// Connected to the redux

export default reduxForm({
  form: "MaterialUiForm" // a unique identifier for this form
})(MaterialUiForm);