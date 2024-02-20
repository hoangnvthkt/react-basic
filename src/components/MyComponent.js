// class component
// function component
import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

// class Mycomponent extends React.Component {
//   //JSX
//   // DRY : Don't repeat yourself
//   state = {
//     listUser: [
//       { id: 1, name: "hoang", age: 16 },
//       { id: 2, name: "nhu", age: 26 },
//       { id: 3, name: "an", age: 26 },
//     ],
//   };

//   handleAddNewUser = (UserObj) => {
//     this.setState({
//       listUser: [UserObj, ...this.state.listUser],
//     });
//   };
//   handleDeleteUser = (userId) => {
//     let listUserClone = [...this.state.listUser];
//     listUserClone = listUserClone.filter((item) => item.id !== userId);
//     this.setState({
//       listUser: listUserClone,
//     });
//   };
//   render() {
//     return (
//       <>
//         <AddUserInfor handleAddNewUser={this.handleAddNewUser}></AddUserInfor>
//         <br /> <br />
//         <DisplayInfor
//           listUser={this.state.listUser}
//           handleDeleteUser={this.handleDeleteUser}
//         ></DisplayInfor>
//       </>
//     );
//   }
// }

const Mycomponent = () => {
  const [listUser, setListUser] = useState([
    { id: 1, name: "hoang", age: 16 },
    { id: 2, name: "nhu", age: 26 },
    { id: 3, name: "an", age: 26 },
  ]);

  const handleAddNewUser = (UserObj) => {
    // this.setState({
    //   listUser: [UserObj, ...this.state.listUser],
    // });
    setListUser([...listUser, UserObj]);
  };
  const handleDeleteUser = (userId) => {
    let listUserClone = listUser;

    listUserClone = listUserClone.filter((item) => item.id !== userId);
    setListUser(listUserClone);
    // this.setState({
    //   listUser: listUserClone,
    // });
  };

  return (
    <>
      <AddUserInfor handleAddNewUser={handleAddNewUser}></AddUserInfor>
      <br /> <br />
      <DisplayInfor
        listUser={listUser}
        handleDeleteUser={handleDeleteUser}
      ></DisplayInfor>
    </>
  );
};
export default Mycomponent;
