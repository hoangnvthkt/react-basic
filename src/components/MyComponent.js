// class component
// function component
import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class Mycomponent extends React.Component {
  //JSX

  render() {
    return (
      <>
        <UserInfor></UserInfor>
        <br /> <br />
        <DisplayInfor name="hoang" age="25"></DisplayInfor>
      </>
    );
  }
}
export default Mycomponent;
