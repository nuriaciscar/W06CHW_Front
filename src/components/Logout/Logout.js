import React from "react";
import { useDispatch } from "react-redux";
import { userLogoutAction } from "../../redux/actions/actionCreators";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import useUser from "../../hooks/useUser";

const Logout = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { user, logoutUser } = useUser();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(userLogoutAction());
    history.push("/robots");
  };

  useEffect(() => {
    if (user.isAuthenticated) {
      logoutUser();
      localStorage.removeItem(process.env.REACT_APP_LOCALSTORAGE_KEY);
    }
  }, [user.isAuthenticated, logoutUser]);

  return (
    <button type="submit" onClick={onSubmit} className="btn btn-primary">
      Logout
    </button>
  );
};

export default Logout;
