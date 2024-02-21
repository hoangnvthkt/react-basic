// import logo from "./logo.svg";
import "./App.scss";
// import { useDispatch, useSelector } from "react-redux";
// import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
// import Mycomponent from "./components/MyComponent";
import React from "react";
import Header from "./components/Header/Header";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div>
        Test Link
        <div>
          <button>
            <Link to={`/Users`}>Go to Users Page</Link>
          </button>
          <button>
            <Link to={`/Admin`}> Go to Admin Page</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default App;
