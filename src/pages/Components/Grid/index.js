import React from "react";
import GridCollection from "./GridCollection";
import Paragraph from "./Paragraph";
import JobList from "./JobList";

const Grid = () => (
  <div className="content">
    <div className="container-fluid" />
    <div classname="row">
      <JobList />
    </div>
    <div classname="row" />
  </div>
);

export default Grid;
