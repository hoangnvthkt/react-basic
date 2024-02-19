import React from "react";

class AddUserInfor extends React.Component {
  state = {
    id: "",
    name: "",
    age: "",
  };
  handleOnchangeInputName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleOnchangeInputAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1),
      name: this.state.name,
      age: this.state.age,
    });
    console.log(this.state);
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
            <label>Your name: </label>
            <input
              type="text"
              onChange={(event) => {
                this.handleOnchangeInputName(event);
              }}
              value={this.state.name}
            />
            <label>Your age: </label>
            <input
              type="text"
              onChange={(event) => {
                this.handleOnchangeInputAge(event);
              }}
              value={this.state.age}
            />
            <button>Submit</button>
          </form>
        </div>
      </>
    );
  }
}
export default AddUserInfor;
