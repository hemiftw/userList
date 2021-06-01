import React, { useState } from "react";
import "./style.scss";
import { Input, Button, Label } from "../../components/common/form";
import { validateLogin } from "../../utils/validators";
import { login } from "../../services/userServices";
import { toast } from "react-toastify";
function Login(props) {
  const [values, setValues] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  console.log(props);
  const handleChange = (field, value) => {
    values[field] = value;
    setValues(values);
  };
  const Userlogin = async () => {
    setLoading(true);
    let { history } = props;
    try {
      await validateLogin.validateAsync(values);
      let apiCall = await login(history, values.email, values.password);
      localStorage.setItem("token", apiCall.data.token);
      toast.success("Success");
      setTimeout(() => {
        history.push('/users')
      }, 1000);
    } catch (ex) {
      let stringified = ex.toString();
      if (stringified.includes("Validation")) {
        let trimmed = stringified.replace("ValidationError: ", "");

        toast.warn(trimmed);
      }
    }
    setLoading(false);
  };
  return (
    <div className="login__page">
      <div className="form__container">
        <div>
          <h3>Login</h3>
        </div>
        <div className="form-group my-3">
          <Label>Email address</Label>
          <Input
            type="email"
            onChange={(e) => handleChange("email", e.target.value)}
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group my-3">
          <Label>Password</Label>
          <Input
            type="password"
            onChange={(e) => handleChange("password", e.target.value)}
            className="form-control"
            placeholder="Password"
          />
        </div>
        {loading === true ? (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <Button className="btn btn-primary" onClick={Userlogin}>
            Log in
          </Button>
        )}
      </div>
    </div>
  );
}

export default Login;
