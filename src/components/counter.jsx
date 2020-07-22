import React, { Component } from "react";
import "./counter.css";

class Counter extends Component {
  state = {
    level: 1,
    isButtonStart: true,
    interval: null,
    bulbs: [
      { id: 0, color: "yellow", name: "zero" },
      { id: 1, color: "yellow", name: "one" },
      { id: 2, color: "yellow", name: "two" },
      { id: 3, color: "yellow", name: "three" },
      { id: 4, color: "yellow", name: "four" },
      { id: 5, color: "yellow", name: "five" },
      { id: 6, color: "yellow", name: "six" },
      { id: 7, color: "yellow", name: "seven" },
      { id: 8, color: "yellow", name: "eight" },
      { id: 9, color: "yellow", name: "nine" },
      { id: 10, color: "yellow", name: "ten" },
      { id: 11, color: "yellow", name: "eleven" },
    ],
  };
  constructor() {
    super();
    this.changeBulbColor = this.changeBulbColor.bind(this);
  }

  changeBulbColor() {
    let i = 0;

    //If button is STOP, clear interval
    if (!this.state.isButtonStart) {
      clearInterval(this.state.interval);
      if (this.state.bulbs[6].color === "yellow") {
        this.setState({ level: 1 });
      } else {
        this.setState({ level: this.state.level + 1 });
      }
    }

    //Toggle button
    this.setState({
      isButtonStart: !this.state.isButtonStart,
    });

    //If button is START, start movement
    if (this.state.isButtonStart) {
      let interval = setInterval(() => {
        this.setState({
          bulbs: this.state.bulbs.map((bulb) => {
            bulb.color = bulb.id === i % 12 ? "red" : "yellow";
            return bulb;
          }),
        });
        i++;
      }, 1000 / this.state.level);
      this.setState({ interval });
    }
  }

  render() {
    return (
      <span className="rounded-circle bg-dark divStyle">
        {this.state.bulbs.map((bulb) => (
          <span key={bulb.id} className={this.getBadgeClasses(bulb.id)}>
            {" "}
            {this.state.level}
          </span>
        ))}
        <button
          style={{ top: "120%", left: "33%" }}
          onClick={this.changeBulbColor}
          className="position-absolute btn btn-secondary"
        >
          {this.state.isButtonStart ? "START" : "STOP"}
        </button>
      </span>
    );
  }

  getBadgeClasses = (id) => {
    let classes = " position-absolute rounded-circle badge badge-";
    classes += this.state.bulbs[id].color === "yellow" ? "warning" : "danger";
    classes += " " + this.state.bulbs[id].name;
    return classes;
  };
}

export default Counter;
