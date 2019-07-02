//Postman dashboard file

import React from "react";
import PostmanTableWithLinks from "../Tables/ExtendedTables/PostmanTableWithLinks";
import Register from "../Forms/RegularForms/Register";
import PendingJobs from "../Tables/ExtendedTables/PendingJobs";
import PostmanHandoverTable from "../Tables/ExtendedTables/PostmanHandoverTable";
import PublicPreference from "../Charts/PublicPreference";
import Tasklist from "./TaskList";

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
            <PostmanTableWithLinks />
          </div>
          <div className="row">
            <PostmanHandoverTable />
          </div>

          <div className="row">
            <div className="col-md-6">
              <PublicPreference />
            </div>
            <div className="col-md-6">
              <Tasklist />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
