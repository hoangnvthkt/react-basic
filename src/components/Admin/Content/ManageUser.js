import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import { useState } from "react";

const ManageUser = (props) => {
  const [showModalCreateUser, setshowModalCreateUser] = useState("false");
  return (
    <div className="manage-user-container">
      <div className="title">Manage Users</div>
      <div className="user-content">
        <div className="btn-add-new">
          <button
            className="btn btn-primary"
            onClick={() => setshowModalCreateUser(true)}
          >
            <FcPlus /> Add new user
          </button>
        </div>

        <div className="table-users-container">Table users</div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setshowModalCreateUser}
        />
      </div>
    </div>
  );
};
export default ManageUser;
