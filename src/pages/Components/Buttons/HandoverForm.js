import React from "react";
import { Field, reduxForm } from "redux-form";
import renderField from "components/FormInputs/renderField";

class HandoverForm extends React.Component {
  constructor() {
    super();
    this.state = {
      package: {}
    };
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="card">
        <div className="header">
          <h4>Handover Package</h4>
        </div>
        <div className="content">
          <form onSubmit={handleSubmit} className="form-horizontal">
            <div className="form-group">
              <label className="control-label col-md-3">packageId</label>
              <div className="col-md-9">
                <Field
                  name="packageId"
                  placeholder="id of package"
                  type="text"
                  component={renderField}
                />
              </div>
            </div>

            <legend>Details of receiving postman</legend>
            <div className="form-group">
              <label className="control-label col-md-3">company</label>
              <div className="col-md-9">
                <Field
                  name="receivingCompany"
                  type="text"
                  placeholder="Deutsche Post"
                  component={renderField}
                />
                {/* helpText="A block of help text that breaks onto a new line." /> */}
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-md-3">Name</label>
              <div className="col-md-9">
                <Field
                  name="Receiving Postman "
                  placeholder="Receiving Postman"
                  type="text"
                  component={renderField}
                  // helpText="postman receiving the package"
                />
              </div>
            </div>

            <button type="submit" className="btn btn-fill btn-info">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: "formElements"
})(HandoverForm);
