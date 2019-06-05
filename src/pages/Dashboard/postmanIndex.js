//Postman dashboard file

import React from "react";
import PostmanTableWithLinks from "../Tables/ExtendedTables/PostmanTableWithLinks";
import Register from "../Forms/RegularForms/Register";
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
            <PostmanTableWithLinks />
          </div>
          <div className="row">
            <PostmanHandoverTable />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
