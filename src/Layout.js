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
import ListQuiz from "./components/Users/ListQuiz";
import DetailQuiz from "./components/Users/DetailQuiz";

const Layout = (props) => {
  const NotFound = () => {
    return (
      <div className="alert alert-danger container mt-3">
        404 Not found Data
      </div>
    );
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />}></Route>
          <Route path="Users" element={<ListQuiz />} />
        </Route>
        <Route path="/quiz/:id" element={<DetailQuiz />} />
        <Route path="/Admin" element={<Admin />}>
          <Route index element={<DashBoard />} />
          <Route path="Manage-Users" element={<ManageUser />} />
        </Route>
        <Route path="Login" element={<Login />}></Route>
        <Route path="Register" element={<Register />}></Route>
        <Route path="*" element={<NotFound />}></Route>
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
