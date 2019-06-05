import React from 'react';
import Tracking from 'assets/images/tracking.png';


const VALUES = ["2018-03-22", "2018-03-23"];

const EXAMPLE = [
  {
    data: "2018-03-22",
    status: "status",
    statusB: "Ready for Dev",
    statusE: "In Progress"
  },
  /* {
    data: "2018-03-23",
    status: "status",
    statusB: "In Progress",
    statusE: "Done"
  } */
];
const sharp = {
  display: "inline-block", 
  fontSize: "16px",
  width: "30%",
  padding: "10px"
  
} 
const values = {
  fontWeight: "Bold", 
  fontSize: "16px",
  display: "inline-block",
  padding: "10px"
} 


class Detailed extends React.Component {
  constructor(props){
    super(props)
    console.log(props)
    this.state = {
        loading: false,
        thePackage: {},
        items: [],
        id: props.match.params.OrderID,
        characters: {}
    }

}

componentDidMount() {
  this.setState({ loading: true });
  console.log(this.state.id)
  var api =   "http://localhost:8000/packages/" + this.state.id
  fetch(api)
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
          this.setState({loading: false})
          // console.log(this.state.items.length);

    })
    .catch(function(error){
        console.log(error)
    })
}

    



render() {
    return (
        <div>
            {this.state.items.map(item => (
              <div className = "row">
                <div className = "col-md-12">
                    <div className = "col-md-6">
                    <div className="card">
                        <div className="header">
                            <h4 className="title">Package Information</h4>
                        </div>
                        <div className = "content ">
                          {/*<ul>
                              <li className = "control-label"><h6>Package Id:</h6>{item.OrderID}</li>
                              <li className = "control-label"><h6>Pickup Address:</h6> {item.PickAddressID}</li>
                              <li className = "control-label"><h6>Drop Address:</h6> {item.DropAddressID}</li>
                              <li className = "control-label"><h6>Sensor Type:</h6> {item.DropAddressID}</li> 
                              <li className = "control-label"> <h6> Status: </h6> {this.state.statusE}</li> 
                          </ul>*/}
                          
                              <div className = "control-label card"  ><h6 style={sharp}>Package Id: </h6><h6 style={values}>{item.OrderID }</h6></div>
                              <div className = "control-label card"><h6 style={sharp}>Pickup Address:</h6><h6 style={values}>{item.PickAddressID}</h6></div>
                              <div className = "control-label card"><h6 style={sharp}>Drop Address:</h6><h6 style={values}> {item.DropAddressID}</h6></div>
                              <div className = "control-label card"><h6 style={sharp}>Sensor Type:</h6> <h6 style={values}>{item.PostCode}</h6> </div>
                              <div className = "control-label card"> <h6 style={sharp}> Status: </h6> <h6 style={values}>{EXAMPLE.statusB}</h6></div> 
                          
                        </div>
                        </div>
                    </div>
                  
                    <div className = "col-md-6">
                    <div className="card">
                          <div className="header">
                              <h4 className="title">Tracking</h4>
                          </div>
                              <div className = "col-md-12 card " > 
                              <img src={Tracking} style={{width:"100%"}}></img>
                              

                              </div>
                      </div>
                    </div>
                    </div>
      
          </div>
            ))}
        </div>
    )    
}
}


export default Detailed;




