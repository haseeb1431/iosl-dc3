import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/FormInputs/renderField';

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors;
};

const StackedForm = ({
  submitting,
  handleSubmit,
  submitForm
}) => {
    return (<div className="card">
      <div className="header">
        <h4>Upgrade User</h4>
      </div>
      <div className="content">
        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label className="control-label">Email</label>
            <Field name="email" type="email" component={renderField} />
          </div>

          <Field name="newsletter" type="checkbox" component={renderField} label="Upgrade to postman" />

          <button type="submit" className="btn btn-fill btn-info" enabled={submitting}>Upgrade</button>
        </form>
      </div>
    </div>);
  };

export default reduxForm({
  form: 'stackedForm',
  validate
})(StackedForm)