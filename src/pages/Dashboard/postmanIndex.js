//Postman dashboard file

import React from 'react';
import PostmanTableWithLinks from '../Tables/ExtendedTables/PostmanTableWithLinks';
import Register from '../Forms/RegularForms/Register';


class Dashboard extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }


  render() {
    return (
      <div className="content">
        <div className="container-fluid">

          <div className="row">
            <div className="col-md-6">
              <PostmanTableWithLinks />
            </div>
            <div className="col-md-6">
              <Register onSubmit={this.submit} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;