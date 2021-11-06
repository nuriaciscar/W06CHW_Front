import renderWithProviders from "../../utils/test-utils";
import RobotList from "./RobotList";

describe("Given a component Robot", () => {
  describe("When it's rendered'", () => {
    test("Then it renders a list of robots", () => {
      renderWithProviders(<RobotList />);
    });
  });
});
