// class component
// function component
import React from "react";

class Mycomponent extends React.Component {
  //JSX
  state = {
    name: "hoangnv",
    address: "",
    age: "",
  };
  handleClick = () => {
    alert(`my name is ${this.state.name}`);
  };
  render() {
    return (
      <>
        <div>my name is {this.state.name}</div>
        <div>
          <button onClick={this.handleClick}>Click me</button>
        </div>
      </>
    );
  }
}
export default Mycomponent;
