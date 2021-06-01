import React from "react";
import Users from "./views/users/index.jsx";
import Login from './views/login/index.jsx'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import './app.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route component={Users} path="/users" />
          <Route component={Login} path="/" />
        </Switch>
      </Router>
      <ToastContainer
        position="bottom-left"
        hideProgressBar={true}
        autoClose={3000}
      />
    </>
  );
};

export default App;
