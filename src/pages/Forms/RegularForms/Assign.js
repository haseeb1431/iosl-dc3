import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/FormInputs/renderField';

class Assign extends React.Component {
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
                <h4>Assign Package</h4>
            </div>
            <div className="content">
                <form onSubmit={handleSubmit} className="form-horizontal">

                    <div className="form-group">
                    <label className="control-label col-md-3">Username/E-mail</label>
                    <div className="col-md-9">
                        <Field
                        name="Postman Email"
                        placeholder = "abc@xyz.com"
                        type="email"
                        component={renderField} 
                        helpText="as appear on DC3 account" /> 
                    </div>
                    </div>

                    <button type="submit" className="btn btn-fill btn-info">Assign</button>
                </form>
            </div>
        </div>

    )
}
}

export default reduxForm({
form: 'formElements'
})(Assign);