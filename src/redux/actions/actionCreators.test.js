import { loadRobotsAction } from "./actionCreators";
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
