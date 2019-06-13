import React, { Component } from "react";
import generateData from "../generateData";
import { Link, Redirect } from "react-router-dom";

class PendingJobs extends Component {
  constructor() {
    super();
    this.state = {
      package: {},
      items: [],
      isLoading: false,
      error: null
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("http://localhost:8000/packagesdetails")
      .then(function(response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(data => {
        console.log(data);
        data.forEach(elemnt => {
          this.state.items.push(elemnt);
        });
        this.setState({ isLoading: false });
        console.log(this.state.items);
        console.log(this.state.items.length);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  deleteItem = itemId => {
    this.setState({
      items: this.state.items.filter(item => item.id !== itemId)
    });
  };

  render() {
    // let { items, isShowingAlert } = this.state;
    return (
      <div className="card">
        <div className="header">
          <h4 className="title">Pending Jobs</h4>
          {/* <p className="category">Here is a subtitle for this table</p> */}
        </div>
        <div className="content table-responsive table-full-width">
          <table className="table table-hover table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Address</th>
                <th>Post Code</th>
                <th>Destination</th>

                <th className="text-right">Arrival Date</th>
                <th className="text-middle">Status</th>
              </tr>
            </thead>
            <tbody>
              {this.state.items.map(item => (
                <tr key={item.OrderID}>
                  <td>{item.StreetAddress}</td>
                  <td>{item.PostCode}</td>
                  <td>{item.City}</td>
                  <td>{item.Country}</td>
                  <td className="text-right"> {item.ArrivalDate}</td>
                  <td className="text-middle">
                    {/* <a rel="tooltip" */}
                    {/* //   className="btn btn-info btn-simple btn-xs"
                    //   // onClick={() => this.deleteItem(item.id)}
                    //   onClick={() => <Redirect to='/package' />}>
                    //   <i className="fa fa-remove"></i> */}
                    {/* // </a> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default PendingJobs;
