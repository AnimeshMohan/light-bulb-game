import React, { Component } from "react";
import "./counter.css";

class Counter extends Component {
  state = {
    count: 0,
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
    setInterval(() => {
      this.setState({
        bulbs: this.state.bulbs.map((bulb) => {
          bulb.color = bulb.id === i % 12 ? "red" : "yellow";
          return bulb;
        }),
      });
      i++;
    }, 1000);
  }

  render() {
    return (
      <span className="rounded-circle bg-dark divStyle">
        <span className={this.getBadgeClasses(0)}>{this.state.count}</span>
        <span className={this.getBadgeClasses(1)}>{this.state.count}</span>
        <span className={this.getBadgeClasses(2)}>{this.state.count}</span>
        <span className={this.getBadgeClasses(3)}>{this.state.count}</span>
        <span className={this.getBadgeClasses(4)}>{this.state.count}</span>
        <span className={this.getBadgeClasses(5)}>{this.state.count}</span>
        <span className={this.getBadgeClasses(6)}>{this.state.count}</span>
        <span className={this.getBadgeClasses(7)}>{this.state.count}</span>
        <span className={this.getBadgeClasses(8)}>{this.state.count}</span>
        <span className={this.getBadgeClasses(9)}>{this.state.count}</span>
        <span className={this.getBadgeClasses(10)}>{this.state.count}</span>
        <span className={this.getBadgeClasses(11)}>{this.state.count}</span>
        <button
          style={{ top: "120%", left: "33%" }}
          onClick={this.changeBulbColor}
          className="position-absolute btn btn-secondary"
        >
          {" "}
          Increment{" "}
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
