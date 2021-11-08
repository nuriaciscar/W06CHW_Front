import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { loginUserThunk } from "../../redux/thunks/loginThunks";

const LoginForm = () => {
  const initialUser = {
    username: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialUser);
  const dispatch = useDispatch;
  const history = useHistory;

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUserThunk(userData));
    history("/robots");
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
        onChange={changeUserData}
      ></input>
      <label htmlFor="password">Password</label>
      <input
        type="text"
        id="password"
        placeholder="Name"
        name="password"
        className="form-control"
        required
        onChange={changeUserData}
      ></input>
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
