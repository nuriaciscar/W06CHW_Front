import actionTypes from "../actions/actionTypes";

const userReducer = (user = { isAuthenticated: false, user: {} }, action) => {
  let newUser;

  switch (action.type) {
    case actionTypes.loginUser:
      newUser = { ...user, isAuthenticated: true, user: action.user };
      break;
    default:
      newUser = { ...user };
  }
  return newUser;
};

export default userReducer;
