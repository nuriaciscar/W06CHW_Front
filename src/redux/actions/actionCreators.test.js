import { deleteRobotsAction, loadRobotsAction } from "./actionCreators";
import actionTypes from "./actionTypes";

describe("Given a loadRobots actionCreator", () => {
  describe("When it receives a list of robots", () => {
    test("Then it should return a load type action with the robots list received", () => {
      const robots = [
        {
          _id: "1",
          name: "Wall-e",
          url: "http://macmagazine.com.br/blog/wp-content/uploads/2008/06/28-walle021.jpg",
          features: {
            speed: 2,
            stamina: 10,
            creationDate: new Date(),
          },
        },
      ];

      const action = {
        type: actionTypes.loadRobots,
        robots: robots,
      };

      const result = loadRobotsAction(robots);

      expect(result).toEqual(action);
    });
  });
});
describe("Given a deleteRobots actionCreator", () => {
  describe("When it receives a robot with an idRobot 1", () => {
    test("Then it should return a delete type action with the id received", () => {
      const idRobot = 1;
      const robots = [
        {
          _id: "1",
          name: "Wall-e",
          url: "http://macmagazine.com.br/blog/wp-content/uploads/2008/06/28-walle021.jpg",
          features: {
            speed: 2,
            stamina: 10,
            creationDate: new Date(),
          },
        },
      ];

      const expectedAction = {
        type: actionTypes.deleteRobots,
        robots: robots,
      };

      const result = deleteRobotsAction(idRobot);

      expect(result).toEqual(expectedAction);
    });
  });
});
