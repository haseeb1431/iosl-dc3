import React from 'react';

import History from '../History';
import Register from './Register';
import authLib from '../../config/authlib'

const fetchOption = authLib.getFetchOptions();


  class UserSpace extends React.Component{
    /*
      the user sapce is a controller for the Registration compenent.
      after the user enter the data in the Registration, the data is being process here.

      the class has 2 possibles views
      1. user history ( see history compnent) with a registration package form
      2. if the user press the sumbit button -> a view with "order registered appear"

    */
    constructor(props){
      super(props)
      this.state = {
        api : 'http://localhost:8000/address',
        addressID : 0,
        recieverID: 0,
        light: 0,
        heavy: 0,
        severe: 0,
        tempValues : [2 , 4],
        orderID: null,
        tempOn : false,
        shcockOn: false
      }
      this.submit = this.submit.bind(this);
      this.addPackage =  this.addPackage.bind(this)
      this.handleChange =  this.handleChange.bind(this)
      this.TempChange =  this.TempChange.bind(this)
      this.getAdressId =  this.getAdressId.bind(this)
      this.addSensore =  this.addSensore.bind(this)
      this.assignPackage = this.assignPackage.bind(this)
    }

    handleChange(event) { 
      const {name, value} = event.target
      console.log(name, value)
      this.setState({
          [name]: value
      })
  }

    TempChange(value) { 
      console.log(value)
      this.setState({
        tempValues: value
      })
  }
    

    submit(values){
      /*
        input: values as user inserted to form
        when pressing the sumbit button,
        make allpreperation to 
      */
      console.log("sumbit start")
      console.log(values)
      console.log(this.state)

      if ("Temp" in values){
        console.log("temp true")
        this.setState({tempOn:values.Temp})
      }
      if ("shock" in values){
        console.log("shock true")
        this.setState({shcockOn: values.shock})
      }

      const sender = {
        "street":values.street,
	      "city":values.city,
	      "country": values.country,
	      "postcode": values.zip
      }
      const rec = {
        "street":values.dstreet,
	      "city":values.dcity,
	      "country": values.dcountry,
	      "postcode": values.dzip
      }
      this.getAdressId(sender, "sender")
      this.getAdressId(rec, "reciever")
      }

    getAdressId(values,flag){
      /*
        fettching the address id from the table.
        set the state thereciver adress and sender .
      */
      console.log("get adreess id started with flag:" + flag)
      fetch("http://localhost:8000/address",  {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
          'x-access-token': fetchOption.headers['x-access-token']
        },
        body: JSON.stringify({
          "street":values.street,
          "city":values.city,
          "country": values.country,
          "postcode": Number(values.postcode)
        })
        })
          .then(res => res.json())
          .then((data) => {
              console.log(data)
              if (flag === "sender"){
                this.setState({
                  addressID : data.AddressID})
              }
              else{
                this.setState({
                  recieverID : data.AddressID})
              }
            })
          .catch(err => console.log(err))
      }


    addPackage(){
    /*
      input : State,
      aftetr the user press on sumbit and on sumbit collected reciever and sender address
      "add package" will start. the function
    */
      console.log("starting to add package")
      console.log(this.state.recieverID)
      console.log(this.state.addressID)
      const options = authLib.getUserObj() ;
      console.log(options)
      const userID = options.ID
      console.log(userID)

      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      
      today = mm + '-' + dd + '-' + yyyy;
      fetch("http://localhost:8000/packages", {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
          'x-access-token': fetchOption.headers['x-access-token']
        },
        body: JSON.stringify({
          "pickaddressid":this.state.addressID,
          "dropaddressid":this.state.recieverID,
          "pickdate": today,
          "arrivaldate": null,
          "personid": userID,
          "receieverid":34,
          "status": "Registered"   
        })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.state.orderID = data.OrderID
            if (this.state.tempOn )
            {
              console.log("temp on ");
              const tempObj = {
                "orderId":this.state.orderID,
                "sensorId":1,
                "minThreshold": this.state.tempValues[0],
                "maxThreshold": this.state.tempValues[1]
              }
              this.addSensore(tempObj) 
            }
            if (this.state.shcockOn)
            {
              console.log("shock on ");
              const shockObj = {
                "orderId":this.state.orderID,
                "sensorId":2,
                "light": this.state.light,
                "heavy": this.state.heavy,
                "severe": this.state.severe
              }
              this.addSensore(shockObj) 
            }  
            
        })
        .catch(err => console.log(err))

      
      console.log("finished add package");
      return "The package have been registered, Thank you"
    }

    addSensore(sensorBody){
    /*
      input state : order id ,sensorsID and corresponding values
      the function post the data into the OrderSensors table.  
    */
      console.log("add sensor started");
      console.log(this.state.orderID)
      fetch("http://localhost:8000/OrderSensors", {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
          'x-access-token': fetchOption.headers['x-access-token']
        },
        body: JSON.stringify(
          sensorBody
        )
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data)
        })

      console.log("finished add Sensor");
    }
//Kiran Added function starts here
    assignPackage(values){
      /*
        input state : order id ,company id, and corresponding values
        the function post the data into the orederHistory table.  
      */
        console.log("assign package started");
        console.log(this.state.orderID)
        fetch("http://localhost:8000/orderHistory", {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json',
            'x-access-token': fetchOption.headers['x-access-token']
          },
          body: JSON.stringify({
          "orderID" : values.OrderID,
          "postmanID":values.postmanID,
          "citcompanyID":values.companyID,
          "status": "Intransit"  
          })
          })
          .then(res => res.json())
          .then((data) => {
              console.log(data)
          })
  
        console.log("finished add Sensor");
      }

      //.......Kiran Added function ends here
  render(){
  return(
          <div className="content">
            <div className="container-fluid">
            {/* if reciever id is zero default view  */}
            {this.state.recieverID === 0 ? 
              <div className="row">
                <div className="col-md-6">
                  <History />
                </div>
                <div className="col-md-6">
                  <Register 
                    onSubmit={this.submit} 
                    light={this.state.light} 
                    tempertureValues={this.state.tempValues}
                    tempChange={this.TempChange}
                    handleChange={this.handleChange} />
                </div>
              </div> : 
                <h2>{this.addPackage()}</h2>}
                 {/* if recieverID is not zero means that the user pressed sumbit and change the state. */}
            </div>
          </div>
    );
  }
}

export default UserSpace;