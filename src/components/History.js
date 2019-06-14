import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class History extends Component {
  constructor(){
    super()
    this.state = {
      package: {},
      items : [],
      isLoading: false,
      error:null,
    }
  }


  componentDidMount() {
    const userID = 33
    this.setState({ isLoading: true });   
    fetch("http://localhost:8000/packages/user/" + userID)
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
 
    return (
      <div className="card">
        <div className="header">
          <h4 className="title">User Packages</h4>
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
                <th className="text-right">Status</th>
                <th className="text-right">Reciver</th>
              </tr>
            </thead>
            <tbody>
              {this.state.items.map(item => (
                <tr key={item.OrderID} >
                  <td><Link to={`/package/${item.OrderID}`} style={{color: 'blue'}}>
                      {item.OrderID}
                      </Link>
                  </td>
                  <td>{item.dropstreetaddress}</td>
                  <td>{item.droppostcode}</td>
                  <td>{item.dropcity}</td>
                  <td>{item.dropcountry}</td>
                  <td>{item.Status}</td>
                  <td className="text-right"> {item.PickDate}</td>
                  {/* <td className="text-middle">
                      <Link to={`/package/${item.OrderID}`}>
                        <div className="btn btn-info" >info</div>
                      </Link>
                    
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    )
  }
}

export default History;