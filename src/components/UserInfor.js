import React from "react";

class UserInfor extends React.Component {
  state = {
    name: "",
    address: "",
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
export default UserInfor;
