import actionTypes from "../actions/actionTypes";

const robotsReducer = (robots = [], action) => {
  let newRobots;

  switch (action.type) {
    case actionTypes.loadRobots:
      newRobots = [...action.robots];
      break;

    case actionTypes.deleteRobots:
      newRobots = robots.filter((robot) => robot.is !== action.id);
      break;
    default:
      newRobots = robots;
  }

  return newRobots;
};

export default robotsReducer;
