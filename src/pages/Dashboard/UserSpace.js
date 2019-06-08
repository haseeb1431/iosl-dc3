import React from 'react';

import TableWithLinks from '../Tables/ExtendedTables/TableWithLinks';
import Register from '../Forms/RegularForms/Register';



  class UserSpace extends React.Component{
    constructor(){
      super()
      this.state = {
        api : 'http://localhost:8000/persons',
        reciverData : false
      }
      // this.reciverValidation = this.reciverValidation.bind(this);
      this.submit = this.submit.bind(this);
    }
    

    submit(values){
      console.log("values!!!!!!!!!!!!!!!!!!!!!!")
      console.log(values)
      // this.reciverValidation(values.receiverEmail)
      // this.reciverData ? console.log("work") : console.log("bummer")

      // fetch('http://localhost:8000/persons', {
      //   method: 'POST',
      //   headers:{
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({
      //     fullname:"hhdkjhgjfdk1111",
      //     email:"alon@hgfdhg.com",
      //     password:"122121",
      //     dateofbirth:"2010-04-30T22:00:00.000Z",
      //   })
      //   })
      //     .then(res => res.json())
      //     .then(data => console.log(data))
      //     .catch(err => console.log(err))
      }

    // reciverValidation(receiverEmail){
    //   console.log(receiverEmail)
    //   fetch("http://localhost:8000/persons")
    //     .then(function(response){
    //       if (response.ok) {
    //           return response.json();
    //         } 
    //         else {
    //           throw new Error('NO receiverEmail');
    //         }
    //     })
    //     .then((data) => {
    //           data.forEach(elemnt => {
    //             if (elemnt.Email === receiverEmail){
    //               console.log("reciever is a register user" + elemnt.Email)
    //               this.reciverData = true
    //             }
    //           })                          
    //     })
    //     .catch(function(error){
    //         console.log(error)
    //     })    
    // }
      

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
            </div>
          </div>
    );
  }
}

export default UserSpace;