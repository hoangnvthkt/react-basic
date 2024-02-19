import React from "react";
import "./DisplayInfor.scss";
import logo from "../logo.svg";
class DisplayInfor extends React.Component {
  state = {
    isShowlistUser: true,
  };

  handleShowHide = () => {
    this.setState({
      isShowlistUser: !this.state.isShowlistUser,
    });
  };
  render() {
    //Destructuring array / object
    const { listUser } = this.props;
    return (
      <>
        <div className="display-infor-container">
          <div>
            <span
              onClick={() => {
                this.handleShowHide();
              }}
            >
              {this.state.isShowlistUser ? "Hide list user" : " Show list user"}
            </span>
          </div>
          {this.state.isShowlistUser && (
            <div>
              {listUser.map((user) => {
                return (
                  <div
                    key={user.id}
                    className={+user.age > 18 ? "red" : "green"}
                  >
                    <div>My name is {user.name}</div>
                    <div>My age is {user.age}</div>
                    <hr />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </>
    );
  }
}
export default DisplayInfor;
