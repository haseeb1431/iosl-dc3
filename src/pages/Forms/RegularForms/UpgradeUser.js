import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/FormInputs/renderField';



/*checkEmail = async (email) => {
  let self = this;
  fetch('http://localhost:8000/persons', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'email': email,
    })
  }).then(function (response) {
    return response.json();
  }).then(function (data) {

    if (data && data.length > 0)  {
      IsEmailExists : true;
    }else {
      IsEmailExists : false;
    } */

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors;
};



const UpgradeUser = ({
  submitting,
  handleSubmit,
  submitForm
}) => {
    return (<div className="card">
      <div className="header">
        <h4>Upgrade Users</h4>
      </div>
      <div className="content">
        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label className="control-label">Email</label>
            <Field name="email" type="email" component={renderField} />
          </div>


          <div className="radio-group">
            <Field
              name="radioOnOff"
              type="radio"
              label="Upgrade to Postman User"
              value="3"
              component={renderField} />

            <Field
              name="radioOnOff"
              type="radio"
              label="Upgrade to Company User"
              value="2"
              component={renderField} />

          </div>

          <button type="submit" className="btn btn-fill btn-info" enabled={submitting}>Upgrade</button>
        </form>
      </div>
    </div>);
  };

export default reduxForm({
  form: 'UpgradeUser',
  validate
})(UpgradeUser)