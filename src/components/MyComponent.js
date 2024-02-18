// class component
// function component
import React from "react";

class Mycomponent extends React.Component {
  //JSX
  state = {
    name: "",
    address: "",
    age: "",
  };
  handleClick = () => {
    this.setState({
      name: "nhunth",
      age: "26",
    });
    alert(`my name is ${this.state.name} and my age is ${this.state.age}`);
  };
  render() {
    return (
      <>
        <div>my name is {this.state.name}</div>
        <div>
          <button
            onClick={(event) => {
              this.handleClick(event);
            }}
          >
            Click me
          </button>
        </div>
      </>
    );
  }
}
export default Mycomponent;
