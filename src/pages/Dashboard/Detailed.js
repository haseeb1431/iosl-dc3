import React from 'react';

class Detailed extends React.Component {
  constructor(props){
    super(props)
    console.log(props)
    this.state = {
        loading: false,
        thePackage: {},
        id: props.match.params.OrderID,
        characters: {}
    }
    this.showPackage = this.showPackage.bind(this)
}

componentDidMount() {
  this.setState({ loading: true });
  console.log(this.state.id)
  var api =   "http://localhost:8000/persons/" + this.state.id
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
          // data.forEach(elemnt => {
          //     this.state.items.push(elemnt)
          // })
          this.setState({loading: false, thePackage: data})
          console.log(this.state.thePackage);
          // console.log(this.state.items.length);

    })
    .catch(function(error){
        console.log(error)
    })
}
    
    


showPackage(){
    
    return(
        <div>
            <h2>Package Information</h2>
            <ul>
                <li>id:{this.state.thePackage.Password}</li>
                {/* <li>From: {this.state.thePackage.Adress}</li>
                <li>to: {this.state.thePackage.Destenation}</li>
                {this.state.thePackage.heatSensor ? <li>heat sensor included</li> : ""} 
                <li>status: {this.state.thePackage.status}</li> */}
            </ul>
        </div>
    )
}

render() {
    return (
        <div>
            {this.state.loading ? "loading..." : this.showPackage()} 
        </div>
    )    
}
}


export default Detailed;