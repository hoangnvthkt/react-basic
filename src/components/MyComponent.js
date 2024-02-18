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
  render() {
    return (
      <>
        <div>my name is {this.state.name}</div>
      </>
    );
  }
}
export default Mycomponent;
