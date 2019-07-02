import React from "react";
import { Link } from 'react-router-dom';
import authLib from '../../config/authlib'


class Active extends React.Component {
  /**
   * display only packages which are in Regitstered mode,
   * Same functionalty as in the Hisorty compnent only with filter
   * the user has the abilty to press on a the delete button to cancel unwanted packages.
   * packages wont be deleted form the db but will be in status Canceled
   * to do: 
   *  1. build a table compnent which fet data and return a table.
   */
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

    const options = authLib.getUserObj() ;
    console.log(options)
    const userID = options.ID
    console.log(userID)
    
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
    /**
     * get an item to delete anf remove from view 
     */
    console.log("deleted item start")
    console.log(itemToDelete)
    this.setState({items: this.state.items.filter(item => item.OrderID !== itemToDelete.OrderID)
    });
    this.changedStatus(itemToDelete)
  }

  changedStatus(item){ 
    /**
     * put request to the database changeing the status of the the item to Canceled
     */
    console.log("changedStatus start")
    console.log(item.OrderID)
    fetch("http://localhost:8000/packages/" + item.OrderID, {
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "Status":"Canceled",
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