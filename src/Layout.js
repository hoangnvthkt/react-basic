import { Route, Routes } from "react-router-dom";
import Users from "./components/Users/Users";
import Admin from "./components/Admin/Admin";
import HomePage from "./components/Home/HomePage";
import ManageUser from "./components/Admin/Content/ManageUser";
import DashBoard from "./components/Admin/Content/DashBoard";
import Login from "./components/Auth/Login";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./components/Auth/Register";

const Layout = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />}></Route>
          <Route path="Users" element={<Users />} />
        </Route>
        <Route path="/Admin" element={<Admin />}>
          <Route index element={<DashBoard />} />
          <Route path="Manage-Users" element={<ManageUser />} />
        </Route>
        <Route path="Login" element={<Login />}></Route>
        <Route path="Register" element={<Register />}></Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
export default Layout;
