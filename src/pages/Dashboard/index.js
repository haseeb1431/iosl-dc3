import React from 'react';
//import EmailChart from './EmailChart';
//import SalesChart from './SalesChart';
//import UserBehaviorChart from './UserBehaviorChart';
import Tasks from './Tasks';
import TableWithLinks from '../Tables/ExtendedTables/TableWithLinks';
import StackedForm from '../Forms/RegularForms/StackedForm';
import VectorMap from '../MapsPage/VectorMap';



const Dashboard = () => (
  
  <div className="content">
    <div className="container-fluid">
      
      <div className="row">
        <div className="col-md-6">
          <TableWithLinks />
        </div>
        <div className="col-md-6">
          <StackedForm />
        </div>
      </div>
      <div className="row">
        {/* <div className="col-md-6">
          <VectorMap />
        </div>
        <div className="col-md-6">
          <Tasks />
        </div> */}
        {/* <div className="col-md-6">
          <StackedForm />
        </div> */}
      </div>

    </div>
  </div>
);

export default Dashboard;