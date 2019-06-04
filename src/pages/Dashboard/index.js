//User dashboard file

import React from 'react';
//import EmailChart from './EmailChart';
//import SalesChart from './SalesChart';
//import UserBehaviorChart from './UserBehaviorChart';
import Tasks from './Tasks';
import TableWithLinks from '../Tables/ExtendedTables/TableWithLinks';
import FormElements from '../Forms/RegularForms/FormElements';
import Register from '../Forms/RegularForms/Register';
import VectorMap from '../MapsPage/VectorMap';



// const Dashboard = () => (
  class Dashboard extends React.Component{
    constructor(){
      super()
      this.state = {
      }
    }
    
    // {
    //   userid:,
    //   pickup:{
    //     name:
    //     pickupaddress:{
    //       'street':''
    //       country:
    //       zip:
    //       city:
    //     }
    //   },
    //   drop:{
    //     name:
    //     email:
    //     pickupaddress:{
    //       'street':''
    //       country:
    //       zip:
    //       city:
    //     }
    //   }


   


    submit(values){
      console.log(values)

      fetch('http://localhost:8000/persons', {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fullname:"alon",
          email:"alon@tk.com",
          password:"321",
          dateofbirth:"2010-04-30T22:00:00.000Z",
        })
        })
          .then(res => res.json())
          .then(data => console.log(data))
          .catch(err => console.log(err))
      }
      

  render(){
  return(
          <div className="content">
            <div className="container-fluid">
              
              <div className="row">
                <div className="col-md-6">
                  <TableWithLinks />
                </div>
                <div className="col-md-6">
                  <Register onSubmit={this.submit} />
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
  }
}

export default Dashboard;