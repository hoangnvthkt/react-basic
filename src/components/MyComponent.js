// class component
// function component
import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class Mycomponent extends React.Component {
  //JSX
  // DRY : Don't repeat yourself
  state = {
    listUser: [
      { id: 1, name: "hoang", age: 16 },
      { id: 2, name: "nhu", age: 26 },
      { id: 3, name: "an", age: 26 },
    ],
  };

  handleAddNewUser = (UserObj) => {
    this.setState({
      listUser: [UserObj, ...this.state.listUser],
    });
  };
  handleDeleteUser = (userId) => {
    let listUserClone = [...this.state.listUser];
    listUserClone = listUserClone.filter((item) => item.id !== userId);
    this.setState({
      listUser: listUserClone,
    });
  };
  render() {
    return (
      <>
        <AddUserInfor handleAddNewUser={this.handleAddNewUser}></AddUserInfor>
        <br /> <br />
        <DisplayInfor
          listUser={this.state.listUser}
          handleDeleteUser={this.handleDeleteUser}
        ></DisplayInfor>
      </>
    );
  }
}
export default Mycomponent;
