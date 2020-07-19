import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    bulbs: [
      { id: 0, color: "yellow" },
      { id: 1, color: "yellow" },
      { id: 2, color: "yellow" },
      { id: 3, color: "yellow" },
      { id: 4, color: "yellow" },
      { id: 5, color: "yellow" },
      { id: 6, color: "yellow" },
      { id: 7, color: "yellow" },
      { id: 8, color: "yellow" },
      { id: 9, color: "yellow" },
      { id: 10, color: "yellow" },
      { id: 11, color: "yellow" },
    ],

    //CSS values
    divStyle: {
      position: "fixed",
      top: "50%",
      left: "50%",
      width: "300px",
      height: "300px",
      marginTop: "-150px",
      marginLeft: "-150px",
    },
    zero: { top: "3%", left: "50%" },
    one: { top: "10%", left: "70%" },
    two: { top: "25%", left: "83%" },
    three: { top: "47%", left: "90%" },
    four: { top: "69%", left: "83%" },
    five: { top: "83%", left: "70%" },
    six: { top: "90%", left: "50%" },
    eleven: { top: "10%", right: "70%" },
    ten: { top: "25%", right: "83%" },
    nine: { top: "47%", right: "90%" },
    eight: { top: "69%", right: "83%" },
    seven: { top: "83%", right: "70%" },
  };

  constructor() {
    super();
    this.changeBulbColor = this.changeBulbColor.bind(this);
  }

  changeBulbColor() {
    // this.setState({ bulbs: this.state.count + 1 });
    console.log("In change bulb");
    let i = 0;
    // for (let i = 1; i < 13; i++) {
    //   this.setState({
    //     bulbs: this.state.bulbs.map((bulb) => {
    //       if (bulb.id === i) {
    //         bulb.color = "red";
    //       }
    //       return bulb;
    //     }),
    //   });
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
      <span
        style={this.state.divStyle}
        className="container rounded-circle bg-dark "
      >
        <span style={this.state.zero} className={this.getBadgeClasses(0)}>
          {this.state.count}
        </span>
        <span style={this.state.one} className={this.getBadgeClasses(1)}>
          {this.state.count}
        </span>
        <span style={this.state.two} className={this.getBadgeClasses(2)}>
          {this.state.count}
        </span>
        <span style={this.state.three} className={this.getBadgeClasses(3)}>
          {this.state.count}
        </span>
        <span style={this.state.four} className={this.getBadgeClasses(4)}>
          {this.state.count}
        </span>
        <span style={this.state.five} className={this.getBadgeClasses(5)}>
          {this.state.count}
        </span>
        <span style={this.state.six} className={this.getBadgeClasses(6)}>
          {this.state.count}
        </span>
        <span style={this.state.seven} className={this.getBadgeClasses(7)}>
          {this.state.count}
        </span>
        <span style={this.state.eight} className={this.getBadgeClasses(8)}>
          {this.state.count}
        </span>
        <span style={this.state.nine} className={this.getBadgeClasses(9)}>
          {this.state.count}
        </span>
        <span style={this.state.ten} className={this.getBadgeClasses(10)}>
          {this.state.count}
        </span>
        <span style={this.state.eleven} className={this.getBadgeClasses(11)}>
          {this.state.count}
        </span>
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
    return classes;
  };
}

export default Counter;
