import actionTypes from "./actionTypes";

export const loadRobotsAction = (robots) => ({
  type: actionTypes.loadRobots,
  robots,
});

export const deleteRobotsAction = (robots) => ({
  type: actionTypes.deleteRobots,
  robots,
});
