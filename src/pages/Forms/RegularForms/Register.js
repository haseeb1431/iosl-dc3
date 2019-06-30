import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/FormInputs/renderField';

class Register extends React.Component {
    constructor(){
        super()
        this.state = {
          package: {},
          
        }
      }
    
        

    render(){
        const { handleSubmit } = this.props;
        return(
            <div className="card">
                <div className="header">
                    <h4>Register New Package</h4>
                </div>
                <div className="content">
                    <form onSubmit={handleSubmit} className="form-horizontal">

                        <legend>Pickup Address</legend>

                        <div className="form-group">
                        <label className="control-label col-md-3">Name</label>
                        <div className="col-md-9">
                            <Field
                            name="Sender Name"
                            placeholder = "Joh Doe"
                            type="text"
                            component={renderField} 
                            helpText="as appear on your Mailbox" /> 
                        </div>
                        </div>

                        <div className="form-group">
                        <label className="control-label col-md-3">country</label>
                        <div className="col-md-9">
                            <Field
                            name="country"
                            type="text"
                            placeholder = "Germany"
                            component={renderField} />
                            {/* helpText="A block of help text that breaks onto a new line." /> */}
                        </div>
                        </div>

                        <div className="form-group">
                        <label className="control-label col-md-3">street</label>
                        <div className="col-md-9">
                            <Field
                            name="street"
                            placeholder = "berlinstr.88"
                            type="text"
                            component={renderField} />
                        </div>
                        </div>

                        <div className="form-group">
                            <label className="control-label col-md-3">zip</label>
                            <div className="col-md-9">
                                <Field
                                name="zip"
                                placeholder = "10235"
                                type="text"
                                component={renderField} />
                            </div>
                        </div>


                        <legend>Destination Address</legend>

                        <div className="form-group">
                            <label className="control-label col-md-3">Name</label>
                            <div className="col-md-9">
                                <Field
                                name="dSender Name"
                                placeholder = "Joh Doe"
                                type="text"
                                component={renderField} 
                                helpText="as appear on reciever Mailbox" /> 
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="control-label col-md-3">country</label>
                            <div className="col-md-9">
                                <Field
                                name="dcountry"
                                type="text"
                                placeholder = "Germany"
                                component={renderField} />
                                {/* helpText="A block of help text that breaks onto a new line." /> */}
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="control-label col-md-3">street</label>
                            <div className="col-md-9">
                                <Field
                                name="dstreet"
                                placeholder = "berlinstr.88"
                                type="text"
                                component={renderField} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="control-label col-md-3">zip</label>
                            <div className="col-md-9">
                                <Field
                                name="dzip"
                                placeholder = "10235"
                                type="text"
                                component={renderField} />
                            </div>
                        </div>

                        <legend>Sensors</legend>

                        <div className="form-group">
                            <label className="control-label col-md-3">Sensors</label>
                            <div className="col-md-9 checkbox-group">
                                <Field
                                name="checkbox1"
                                type="checkbox"
                                label="Heat Sensor"
                                component={renderField} />

                                <Field
                                name="checkbox2"
                                type="checkbox"
                                label="Pressure Sensors"
                                component={renderField} />                           
                            </div>
                        </div>
                        <button type="submit" className="btn btn-fill btn-info">Submit</button>
                    </form>
                </div>
            </div>

        )
    }
}

export default reduxForm({
    form: 'formElements'
  })(Register);