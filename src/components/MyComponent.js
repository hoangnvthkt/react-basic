// class component
// function component
import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class Mycomponent extends React.Component {
  //JSX
  // DRY : Don't repeat yourself
  state = {
    listUser: [
      { id: 1, name: "hoang", age: 24 },
      { id: 2, name: "nhu", age: 26 },
      { id: 3, name: "an", age: 26 },
    ],
  };

  render() {
    return (
      <>
        <UserInfor></UserInfor>
        <br /> <br />
        <DisplayInfor listUser={this.state.listUser}></DisplayInfor>
      </>
    );
  }
}
export default Mycomponent;
