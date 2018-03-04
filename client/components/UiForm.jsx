/* eslint-disable */

import React from "react";
import { Field, reduxForm } from "redux-form";
import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";

import styled from "styled-components";

const Wrapper = styled.div`
  padding-bottom: 3rem;

`;

const Label = styled.label`
padding-bottom: 1rem;

`


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

// Mapping over the Question props coming from ShowQuestions.jsx and Getting Id , Question , and Options array

  const allQuestions = props.formData.questions.map(question => {
    return (
      <Wrapper>
      <div key={question.id} {...question} className="list-group text-center">
        <strong><Label htmlFor={question.question}>{question.question}</Label></strong>
        <div>
          <Field
            key={question.id}
            name={question.id}
            component={renderRadioGroup}
            
          >
            {question.options.map(option => {
              return (
                <RadioButton
                  key={option.id}
                  value={option.id}
                  label={option.text}
                  required
                  className="list-group-item"
                />
              );
            })}
          </Field>
        </div>
      </div>
      </Wrapper>
    );
  });
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

// Connected to the redux

export default reduxForm({
  form: "MaterialUiForm" // a unique identifier for this form
})(MaterialUiForm);