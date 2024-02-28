import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
const ManageUser = (props) => {
  return (
    <div classNameName="manage-user-container">
      <div classNameName="title">Manage Users</div>
      <div classNameName="user-content">
        <button>Add new user</button>
        <div>
          Table users
          <ModalCreateUser />
        </div>
      </div>
    </div>
  );
};
export default ManageUser;
