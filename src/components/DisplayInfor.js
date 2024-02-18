import React from "react";
class DisplayInfor extends React.Component {
  render() {
    //Destructuring array / object
    const { listUser } = this.props;
    return (
      <>
        <div>
          {listUser.map((user) => {
            return (
              <div key={user.id}>
                <div>My name is {user.name}</div>
                <div>My age is {user.age}</div>
                <hr />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
export default DisplayInfor;
