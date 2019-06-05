import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class UserTableWithLinks extends Component {
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

  componentDidMount() {
    this.setState({ isLoading: true });   
    fetch("http://localhost:8000/persons")
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
          <h4 className="title">Users</h4>
          {/* <p className="category">Here is a subtitle for this table</p> */}
        </div>
        <div className="content table-responsive table-full-width">
          <table className="table table-hover table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Person Type</th>
                <th>Person Role</th>
              </tr>
            </thead>
            <tbody>
              {this.state.items.map(item => (
                <tr key={item.ID} >
                  <td><Link to={`/package/${item.ID}`} style={{color: 'blue'}}>
                      {/* <i className="pe-7s-graph"></i> */}
                      {item.ID}
                      </Link>
                  </td>                  
                  <td>{item.FullName}</td>
                  <td>{item.Email}</td>
                  <td>******</td>
                  <td>{item.PersonType ==0 ? "Customer" : (item.PersonType ==1 ? "Company":"Postman")}</td>
                  <td className="text-right"> {item.ArrivalDate}</td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    )
  }
}

export default UserTableWithLinks;