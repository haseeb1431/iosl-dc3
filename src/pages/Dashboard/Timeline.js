import React from "react";
import HorizontalTimeline from "react-horizontal-timeline";



class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curIdx: 0,      
      prevIdx: -1
    };
  }

  //state = { value: 0, previous: 0 };

  render() {
    var EXAMPLE = this.props.EXAMPLE    
    const {curIdx, prevIdx} = this.state;
    const curStatus = EXAMPLE[curIdx].statusB;
    const prevStatus = prevIdx >= 0 ? EXAMPLE[prevIdx].statusB : '';

    return (
      <div>
        {/* Bounding box for the Timeline */}
        <div
          style={{
            width: "60%",
            height: "100px",
            margin: "0 auto",
            marginTop: "20px",
            fontSize: "15px"
          }}
        >
          <HorizontalTimeline
            styles={{
              background: "#f8f8f8",
              foreground: "#1A79AD",
              outline: "#dfdfdf"
            }}
            index={this.state.curIdx}
            indexClick={index => {
              const curIdx = this.state.curIdx;
              this.setState({ curIdx: index, prevIdx: curIdx });
            }}            
            values={EXAMPLE.map(x => x.data)}
          />
        </div>
        <div className="text-center">
          {/* any arbitrary component can go here */}
          {curStatus} - {prevStatus}
        </div>
      </div>
    );
  }
}

export default Timeline;