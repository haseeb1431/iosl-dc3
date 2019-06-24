import React from "react";
import { Link } from 'react-router-dom';


class Active extends React.Component {
  
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
                if (elemnt.dropcountry !== "Delivery" && elemnt.Status !== "Canceled" && elemnt.Status !== "it should work"){
                  this.state.items.push(elemnt)
                }
                
            })
            this.setState({isLoading: false })
            console.log(this.state.items);
            console.log(this.state.items.length);

      })
      .catch(function(error){
          console.log(error)
      })
  }


  deleteItem(itemToDelete ){
    console.log("deleted item start")
    console.log(itemToDelete)
    this.setState({items: this.state.items.filter(item => item.OrderID !== itemToDelete.OrderID)
    });
    this.changedStatus(itemToDelete)
  }

  changedStatus(item){ 
    console.log("changedStatus start")
    console.log(item.OrderID)
    fetch("http://localhost:8000/packages/" + item.OrderID, {
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "Status":"canceled",
        "PickAddressID":item.PickAddressID,
        "PickDate":item.PickDate,
        "PersonID":item.PersonID,
        "ReceiverPersonID": item.ReceiverPersonID,
        "DropAddressID": item.DropAddressID
      })
      })
        .then(res => console.log(res)) //res.json())//
        // .then(data => {
        //   console.log(data)
        //   this.setState({
        //   addressID : data.AddressID})
        // })
        .catch(err => console.log(err))
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
                <th className="text-middle">Status</th>
                <th className="text-middle">Reciver</th>
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
                  <td className="text-middle"> {item.PickDate}</td>
                  <td className="text-middle">
                        <div className="btn btn-danger btn-fill btn-wd" onClick={() => this.deleteItem(item)} >delete</div>
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

export default Active;