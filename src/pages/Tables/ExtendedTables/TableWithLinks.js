import React, { Component } from 'react';
import generateData from '../generateData';
import { Link, Redirect } from 'react-router-dom';

class TableWithLinks extends Component {
  constructor(){
    super()
    this.state = {
      package: {},
      items : [],
      isLoading: false,
      error:null,
      // items: generateData()
    }
  }
  // state = {
  //   items: generateData()
  // };

  componentDidMount() {
    this.setState({ isLoading: true });   
    fetch("http://localhost:8000/packagesdetails")
      .then(function(response){
        if (response.ok) {
            return response.json();
          } 
          else {
            throw new Error('Something went wrong ...');
          }
      })
      .then((data) => {
          console.log(data)
            data.forEach(elemnt => {
                this.state.items.push(elemnt)
            })
            this.setState({isLoading: false })
            console.log(this.state.items);
            console.log(this.state.items.length);

      })
      .catch(function(error){
          console.log(error)
      })
  }


  deleteItem = itemId => {
    this.setState({
      items: this.state.items.filter(item => item.id !== itemId)
    });
  }

  render() {
    // let { items, isShowingAlert } = this.state;
    return (
      <div className="card">
        <div className="header">
          <h4 className="title">User Packages</h4>
          {/* <p className="category">Here is a subtitle for this table</p> */}
        </div>
        <div className="content table-responsive table-full-width">
          <table className="table table-hover table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Street Adress</th>
                <th>Post Code</th>
                <th>City</th>
                <th>Country</th>
                <th className="text-right">Arrival Date</th>
                <th className="text-middle">Details</th>
              </tr>
            </thead>
            <tbody>
              {this.state.items.map(item => (
                <tr key={item.OrderID} >
                  <td><Link to={`/package/${item.OrderID}`} style={{color: 'blue'}}>
                      {/* <i className="pe-7s-graph"></i> */}
                      {item.OrderID}
                      </Link>
                  </td>
                  <td>{item.StreetAddress}</td>
                  <td>{item.PostCode}</td>
                  <td>{item.City}</td>
                  <td>{item.Country}</td>
                  <td className="text-right"> {item.ArrivalDate}</td>
                  <td className="text-middle">
                      <Link to={`/package/${item.OrderID}`}>
                        <div className="btn btn-wd btn-info" >info</div>
                      </Link>
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
    )
  }
}

export default TableWithLinks;