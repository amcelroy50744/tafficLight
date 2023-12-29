import { Component } from "react";

export class ClassTrafficLight extends Component {
  state = {
    currentLight: 1,
    lightValues: { red: "red", yellow: "black", green: "black" },
  };
  trafficFlow = () => {
    if (this.state.currentLight < 2) {
      this.setState({ currentLight: this.state.currentLight + 1 });
    } else {
      this.setState({ currentLight: 0 });
    }
  };

  trafficLight = () => {
    this.trafficFlow();
    this.setState(() => {
      if (this.state.currentLight === 0) {
        this.state.lightValues.red = "red";
        this.state.lightValues.green = "black";
        this.state.lightValues.yellow = "black";
      }
      if (this.state.currentLight === 1) {
        this.state.lightValues.red = "black";
        this.state.lightValues.green = "green";
        this.state.lightValues.yellow = "black";
      }
      if (this.state.currentLight === 2) {
        this.state.lightValues.red = "black";
        this.state.lightValues.green = "black";
        this.state.lightValues.yellow = "yellow";
      }
    });
    return this.state.lightValues;
  };

  render() {
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          <div className={`circle ${this.state.lightValues.red}`}></div>
          <div className={`circle ${this.state.lightValues.yellow}`}></div>
          <div className={`circle ${this.state.lightValues.green}`}></div>
        </div>
        <button
          className="next-state-button"
          onClick={() => {
            this.trafficLight();
          }}
        >
          Next State
        </button>
      </div>
    );
  }
}
