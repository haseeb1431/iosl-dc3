import React from "react";
import HorizontalTimeline from "react-horizontal-timeline";
import authLib from '../../config/authlib'

const h22 = {
  fontWeight: "Bold", 
  fontSize: "12px",
  display: "inline-block",
  padding: "5px"
}

class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curIdx: 0,      
      prevIdx: 0,
      timeHistory: [],
      load:false
    };
  }

  render() { 
 
    let {curIdx, prevIdx} = this.state;
    let curStatus = this.props.history[curIdx].Status;
    let prevStatus = prevIdx >= 0 ?  + this.props.history[prevIdx].CompanyId : '';
    let postman = prevIdx >= 0 ?  + this.props.history[prevIdx].PostmanId : '';
  
    return (     
      <div>
        <h2 className="text-center">Timeline & Details</h2>
        <div>
          <div
            style={{
              width: "60%",
              height: "100px",
              margin: "0 auto",
              marginTop: "20px",
              fontSize: "15px"
            }}>
            <HorizontalTimeline
              styles={{
                background: "#f8f8f8",
                foreground: "green",
                outline: "#dfdfdf",
                
              }}
              index={this.state.curIdx}
              indexClick={index => {
                const curIdx = this.state.curIdx;
                this.setState({ curIdx: index, prevIdx: curIdx });
              }}            
              values={this.props.history.map(x => x.HandoverDate)}
            />
          </div>
            <div className="text-center">
            {/* any arbitrary component can go here */}
            Status: {curStatus}
            <br></br> 
            Company: {prevStatus}
            <br></br>
            postman: {postman}
            </div>
          </div> 
      </div>
    );
  }
}

export default Timeline