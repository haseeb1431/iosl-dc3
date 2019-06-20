import React from "react";
import ReactChartist from "react-chartist";
//import Chartist from "chartist";

const dataPreferences = {
  labels: ["62%", "38%"],
  series: [62, 38]
};

const optionsPreferences = {
  donut: true,
  donutWidth: 40,
  startAngle: 0,
  height: "245px",
  total: 100,
  showLabel: false,
  axisX: {
    showGrid: false,
    offset: 0
  },
  axisY: {
    offset: 0
  }
};

const PublicPreference = () => (
  <div className="card">
    <div className="header">
      <h4>Job Statistics</h4>
    </div>
    <div className="content">
      <ReactChartist
        data={dataPreferences}
        options={optionsPreferences}
        type="Pie"
        className="ct-chart"
      />
    </div>
    <div className="footer">
      <h6>Legend</h6>
      <i className="fa fa-circle text-info" /> Completed
      <i className="fa fa-circle text-danger" /> Pending
    </div>
  </div>
);

export default PublicPreference;
