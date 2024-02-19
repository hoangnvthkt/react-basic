import React from "react";
import "./DisplayInfor.scss";
//import logo from "../logo.svg";
// class DisplayInfor extends React.Component {
//   state = {
//     isShowlistUser: true,
//   };

//   render() {
//     //Destructuring array / object
//     const { listUser } = this.props;
//     return (
//       <>
//         <div className="display-infor-container">
//           {true && (
//             <div>
//               {listUser.map((user) => {
//                 return (
//                   <div
//                     key={user.id}
//                     className={+user.age > 18 ? "red" : "green"}
//                   >
//                     <div>
//                       <div>My name is {user.name}</div>
//                       <div>My age is {user.age}</div>
//                     </div>
//                     <div>
//                       <button
//                         onClick={() => {
//                           this.props.handleDeleteUser(user.id);
//                         }}
//                       >
//                         Delete
//                       </button>
//                     </div>
//                     <hr />
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       </>
//     );
//   }
// }

const DisplayInfor = (props) => {
  const { listUser } = props;
  return (
    <>
      <div className="display-infor-container">
        {true && (
          <div>
            {listUser.map((user) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "red" : "green"}>
                  <div>
                    <div>My name is {user.name}</div>
                    <div>My age is {user.age}</div>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        props.handleDeleteUser(user.id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};
export default DisplayInfor;
