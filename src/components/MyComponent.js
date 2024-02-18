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
  handleOnchangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <>
        <div>
          my name is {this.state.name} and I'm {this.state.age}
        </div>
        <div>
          <form
            onSubmit={(event) => {
              this.handleOnSubmit(event);
            }}
          >
            <input
              type="text"
              onChange={(event) => {
                this.handleOnchangeInput(event);
              }}
            />
            <button>Submit</button>
          </form>
        </div>
      </>
    );
  }
}
export default Mycomponent;
