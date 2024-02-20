import React, { useState } from "react";

// class AddUserInfor extends React.Component {
//   state = {
//     id: "",
//     name: "",
//     age: "",
//   };
//   handleOnchangeInputName = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//   };
//   handleOnchangeInputAge = (event) => {
//     this.setState({
//       age: event.target.value,
//     });
//   };
//   handleOnSubmit = (event) => {
//     event.preventDefault();
//     this.props.handleAddNewUser({
//       id: Math.floor(Math.random() * 100 + 1),
//       name: this.state.name,
//       age: this.state.age,
//     });
//     // Reset ô nhập liệu
//     this.setState({
//       id: "",
//       name: "",
//       age: "",
//     });
//   };
//   render() {
//     return (
//       <>
//         <div>
//           my name is {this.state.name} and I'm {this.state.age}
//         </div>
//         <div>
//           <form
//             onSubmit={(event) => {
//               this.handleOnSubmit(event);
//             }}
//           >
//             <label>Your name: </label>
//             <input
//               type="text"
//               onChange={(event) => {
//                 this.handleOnchangeInputName(event);
//               }}
//               value={this.state.name}
//             />
//             <label>Your age: </label>
//             <input
//               type="text"
//               onChange={(event) => {
//                 this.handleOnchangeInputAge(event);
//               }}
//               value={this.state.age}
//             />
//             <button>Submit</button>
//           </form>
//         </div>
//       </>
//     );
//   }
// }

const AddUserInfor = (props) => {
  // state = {
  //   id: "",
  //   name: "",
  //   age: "",
  // };
  const [name, setName] = useState("");
  // const [Address, setAddress] = useState("Binh Duong");
  const [age, setAge] = useState("");

  const handleOnchangeInputName = (event) => {
    // this.setState({
    //   name: event.target.value,
    // });
    setName(event.target.value);
  };
  const handleOnchangeInputAge = (event) => {
    // this.setState({
    //   age: event.target.value,
    // });
    setAge(event.target.value);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1),
      name: name,
      age: age,
    });
    // Reset ô nhập liệu
    // this.setState({
    //   id: "",
    //   name: "",
    //   age: "",
    // });
    setName("");
    setAge("");
  };
  return (
    <>
      <div>
        my name is {name} and I'm {age}
      </div>
      <div>
        <form
          onSubmit={(event) => {
            handleOnSubmit(event);
          }}
        >
          <label>Your name: </label>
          <input
            type="text"
            onChange={(event) => {
              handleOnchangeInputName(event);
            }}
            value={name}
          />
          <label>Your age: </label>
          <input
            type="text"
            onChange={(event) => {
              handleOnchangeInputAge(event);
            }}
            value={age}
          />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default AddUserInfor;
