//Postman dashboard file

import React from "react";
import PostmanTableWithLinks from "../Tables/ExtendedTables/PostmanTableWithLinks";
import Register from "../Forms/RegularForms/Register";
import PendingJobs from "../Tables/ExtendedTables/PendingJobs";
import PostmanHandoverTable from "../Tables/ExtendedTables/PostmanHandoverTable";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {};
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
              <PostmanHandoverTable />
            </div>
          </div>
          <div className="row" />
          <PendingJobs />
        </div>
      </div>
    );
  }
}

export default Dashboard;
