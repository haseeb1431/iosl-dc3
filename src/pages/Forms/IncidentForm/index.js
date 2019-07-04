import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/FormInputs/renderField';
import _ from 'lodash';

const validate = values => {
  const errors = {};
  if (!values.required) {
    errors.required = 'This field is required';
  }
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Please enter a valid email';
  }
  if (values.number && _.isNaN(values.number)) {
    errors.number = 'Please enter a number';
  }
  if (values.number1 && _.isNaN(values.number1)) {
    errors.number1 = 'Please enter a number';
  }
  if (!values.required1) {
    errors.required1 = 'This field is required';
  }
  if (!values.required2) {
    errors.required2 = 'This field is required';
  }
  return errors;
}

const IncidentForm = ({
  handleSubmit,
  onSubmit
}) => (
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="header"><h4>Create Incident</h4></div>
          <form className="form-horizontal" onSubmit={handleSubmit(onSubmit)}>
            <div className="content">
              <div className="form-group">
                <label className="col-sm-3 control-label">Issue Description</label>
                <div className="col-sm-9">
                  <Field
                    type="text"
                    name="required"
                    component={renderField} />
                </div>
              </div>

              <div className="form-group">
                <label className="col-sm-3 control-label">Order ID</label>
                <div className="col-sm-9">
                  <Field
                    type="number"
                    name="required1"
                    component={renderField} />
                </div>
              </div>

            </div>
            <div className="footer text-center">
              <button type="submit" className="btn btn-info btn-fill">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

export default reduxForm({
  form: 'IncidentForm',
  validate
})(IncidentForm);