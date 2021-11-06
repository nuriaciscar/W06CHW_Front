import renderWithProviders from "../../utils/test-utils";
import RobotList from "./RobotList";

describe("Given a component RobotList component", () => {
  describe("When it's rendered'", () => {
    test("Then it renders a list of robots", () => {
      renderWithProviders(<RobotList />);
    });
  });
});
