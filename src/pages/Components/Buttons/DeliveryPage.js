import React from "react";
import { Field, reduxForm } from "redux-form";
import renderField from "components/FormInputs/renderField";

class DeliveryPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      loading: false,
      thePackage: {},
      items: [],
      deliveryData: props.match.params.dropaddressid
    };
  }
  // constructor() {
  //   super();
  //   this.state = {
  //     package: {}
  //   };
  // }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="card">
        <div className="header">
          <h4>Deliver Package</h4>
        </div>
        {/* <h4 className="text-center">
          Package ID:{this.state.deliveryData.orderid}
        </h4> */}
        <h4 className="text-center">
          Drop Location ID:{this.state.deliveryData}
        </h4>
        <div className="content">
          <form onSubmit={handleSubmit} className="form-horizontal">
            <legend>The package is being delivered here</legend>

            <button type="submit" className="btn btn-fill btn-info">
              Confirm
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: "formElements"
})(DeliveryPage);
