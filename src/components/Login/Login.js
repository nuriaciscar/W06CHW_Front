import { useDispatch } from "react-redux";
import { useNavigate } from "@reach/router";
import React, { useState } from "react";

const LoginForm = () => {
  const initialUser = {
    username: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialUser);
  const dispatch = useDispatch;
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUserThunk(userData));
    navigate("/robots");
  };

  const changeUserData = (event) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        placeholder="Name"
        name="username"
        className="form-control"
        required
      ></input>
      <label htmlFor="password">Password</label>
      <input
        type="text"
        id="password"
        placeholder="Name"
        name="password"
        className="form-control"
        required
      ></input>
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
