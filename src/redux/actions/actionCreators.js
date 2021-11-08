import actionTypes from "./actionTypes";

export const loadRobotsAction = (robots) => ({
  type: actionTypes.loadRobots,
  robots,
});

export const deleteRobotsAction = (idRobot) => ({
  type: actionTypes.deleteRobots,
  idRobot,
});

export const userLoginAction = (user) => ({
  type: actionTypes.loginUser,
  user,
});
