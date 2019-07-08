import React from 'react';
import TableWithSwitch from './TableWithSwitch';
import TableWithLinks from './TableWithLinks';


const ExtendedTables = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-6">
        <TableWithLinks />
      </div>
      <div className="col-md-6">
        <TableWithSwitch />
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
      </div>
    </div>
  </div>
);

export default ExtendedTables;