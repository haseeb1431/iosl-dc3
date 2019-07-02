import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/FormInputs/renderField';
import authLib from '../../../config/authlib'
class Assign extends React.Component {
    /* constructor(){
        super()
        this.state = {
          package: {},
          
        }
      } */
      constructor(props){
        super(props)
        this.state = {
            loading: false,
            thePackage: {},
            items: [],
            id: props.match.params.orderid,
            characters: {}
        }
    }

      componentDidMount() {
        this.setState({ loading: true });
        const options = authLib.getFetchOptions()  ;
        console.log(this.state.id);
        var api =   "http://localhost:8000/packages/" + this.state.id
        fetch(api,options)
          .then(function(response){
            if (response.ok) {
                return response.json();
              } 
              else {
                throw new Error('No postmanEmail');
              }
          })
          .then((data) => {
              console.log(data)
                data.forEach(elemnt => {
                    this.state.registerUsers.push(elemnt.Email)
                })
                this.setState({loading: false})
                // console.log(this.state.items.length);
      
          })
          .catch(function(error){
              console.log(error)
          })
      }

render(){
    console.log("!!! rendering !!!")
    console.log(this.props)
    console.log(this.state.registerUsers)
    const { handleSubmit,valid } = this.props;
    const allowedEmail= (value) => {
        if (this.state.registerUsers.indexOf(value) === -1){
            return "Postman not register"
        }
        else{
            console.log("*******" + this.state.registerUsers)
            return undefined
        }
      }
    return(
        <div className="card">
            <div className="header">
                <h4>Assign Package</h4>
            </div>
            <div className="content">
                <form onSubmit={handleSubmit} className="form-horizontal">

                    <div className="form-group">
                    <label className="control-label col-md-3">Username/E-mail </label>
                    <div className="col-md-9">
                        <Field
                        name="postmanEmail"
                        placeholder = "abc@xyz.com"
                        type="email"
                        component={renderField} 
                        helpText="as appear on DC3 account" /> 
                    </div>
                    <button type="submit" className="btn btn-fill btn-info">Assign</button>
                    </div>
            
                </form>
            </div>
        </div>

    )
}
}

export default reduxForm({
form: 'formElements'
})(Assign);