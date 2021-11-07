import actionTypes from "../actions/actionTypes";

const robotsReducer = (robots = [], action) => {
  let newRobots;

  switch (action.type) {
    case actionTypes.loadRobots:
      newRobots = [...action.robots];
      break;

    case actionTypes.deleteRobots:
      newRobots = robots.filter((robot) => robot.idRobot !== action.idRobot);
      break;
    default:
      newRobots = robots;
  }

  return newRobots;
};

export default robotsReducer;
