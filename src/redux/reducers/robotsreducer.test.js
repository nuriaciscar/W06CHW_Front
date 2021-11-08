import actionTypes from "../actions/actionTypes";
import robotsReducer from "./robotsReducer";

describe("Given a robotsReducer reducer", () => {
  describe("When it receives an empty robots list and a load action with one robot", () => {
    test("Then it should return a new robots list with the robot received", () => {
      const initialRobots = [];
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

      const loadRobots = {
        type: actionTypes.loadRobots,
        robots,
      };

      const newRobotsList = robotsReducer(initialRobots, loadRobots);

      expect(newRobotsList).toEqual(robots);
    });
  });
  describe("When it receives a robot list and a delete action with an idRobot", () => {
    test("Then it should return a new robots list without the robot received", () => {
      const initialRobots = [
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
        {
          _id: "2",
          name: "Eva",
          url: "https://www.desktopbackground.org/download/1920x1080/2013/10/22/658116_download-wall-e-and-eve-wallpapers-wide_3497x1463_h.jpg",
          features: {
            speed: 7,
            stamina: 2,
            creationDate: new Date(),
          },
        },
      ];
      const robotToDelete = initialRobots[0];
      const deleteRobots = {
        type: actionTypes.deleteRobots,
        idRobot: robotToDelete.idRobot,
      };

      const newRobotsList = robotsReducer(initialRobots, deleteRobots);

      expect(newRobotsList).not.toContainEqual(robotToDelete);
    });
  });
  describe("When it receives a robots list and an unknown action", () => {
    test("Then it should return the received robots list", () => {
      const initialRobots = [
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
        type: "anything",
      };

      const newRobotsList = robotsReducer(initialRobots, action);

      expect(newRobotsList).toEqual(initialRobots);
    });
  });
});
